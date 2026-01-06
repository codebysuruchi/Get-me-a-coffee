"use server";

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDb from "@/db/connectDb";
import User from "@/models/User";
import username from "@/app/[username]/page";
// import username from "@/app/[username]/page"

export const initiate = async (amount, to_username, paymentfrom) => {
  await connectDb();

  // fetch the secret of the user who is getting the payment
  let user = await User.findOne({ username: to_username });
  const keyId = process.env.NEXT_PUBLIC_KEY_ID || user.RazorpayId;
  const secret = user.RazorpaySecret || process.env.KEY_SECRET;

  var instance = new Razorpay({ key_id: keyId, key_secret: secret });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };
  let x = await instance.orders.create(options);

  //create a payment object which shows a pending  payment in the database

  await Payment.create({
    oid: x.id,
    amount: amount / 100,
    to_user: to_username,
    name: paymentfrom.name,
    message: paymentfrom.message,
  });

  return x;
};

export const fetchUser = async (username) => {
  await connectDb();
  let u = await User.findOne({ username: username });
  if (!u) return {};

  let user = u.toObject({ flattenObjectIds: true });
  return user;
};

export const fetchPayments = async (username) => {
  await connectDb();
  //find all payments sorted by decreasing order of amount and flatten object id's
  let p = await Payment.find({ to_user: username, done: true })
    .sort({ amount: -1 })
    .limit(10)
    .lean();
  return p;
};

export const updateProfile = async (data, oldusername) => {
  await connectDb();
  let ndata = Object.fromEntries(data);

  //if the username is being updated , check if username is available
  if (oldusername !== ndata.username) {
    let u = Object.fromData({ username: ndata.oldusername });
    if (u) {
      return { error: "username already exists" };
    }
    await User.updateOne({ email: ndata.email }, ndata);
    //now update all payments to reflect the new username
    await Payment.updateMany(
      { to_user: oldusername },
      { to_user: ndata.username }
    );
  } else {
    await User.updateOne({ email: ndata.email }, ndata);
  }
};
