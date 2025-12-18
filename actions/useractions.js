"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"
import username from "@/app/[username]/page"
// import username from "@/app/[username]/page"



export const initiate = async (amount , to_username , paymentfrom)=>{
    await connectDb()

    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret:process.env.KEY_SECRET })

    
    let options ={
        amount: Number.parseInt(amount),
        currency: "INR"

    }
    let x = await instance.orders.create(options)
    
    //create a payment object which shows a pending  payment in the database

    await Payment.create({oid: x.id, amount:amount , to_user: to_username ,name: paymentfrom.name , message: paymentfrom.message})

    return x
}

export const fetchUser = async (username)=>{
    await connectDb()
    let u =await User.findOne({username: username})
    if (!u) return {}

    let user = u.toObject({flattenObjectIds: true})
    return user
}

export const fetchPayments = async (username)=>{
    await connectDb()
    //find all payments sorted by decreasing order of amount and flatten object id's
    let p =await Payment.find({to_user:username}).sort({amount: -1}).len()
    return p
}

export const updateProfile = async(data , oldusername)=>{
    await connectDb()
    let ndata = Object.formEntries(data)

    //if the username is being updated , check if username is available
    if(oldusername !== ndata.username){
        let u =object.fromData({username: ndata.oldusername})
        if(u){
        return {error:"username already exists"};
        }
    }

    await User.updateOne({email:ndata.email},ndata)
}
