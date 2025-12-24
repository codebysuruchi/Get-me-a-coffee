"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchUser, updateProfile } from "@/actions/useractions";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from "react-toastify";

const dashboard = () => {
  const { data: session, update } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({});

  useEffect(() => {
    console.log(session);

    if (!session) {
      router.push("/login");
    } else {
      getData();
    }
  }, [session, router]);

  const getData = async () => {
    let u = await fetchUser(session.user.name);
    setForm(u);
  };

  // Add the handleChange function
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    let a = await updateProfile(e, session.user.name);
    toast('Profile Updated ', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    
  };

  return (
  <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    {/* Same as */}
    <ToastContainer />
    <div>
      <div className="container mx-auto py-5">
        <h1 className="text-center my-5 text-3xl font-bold">
          Welcome to your Dashboard
        </h1>

        <form className="max-w-2xl mx-auto" action={handleSubmit}>
          <div className="my-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              value={form.name ? form.name : ""}
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* input for email */}
          <div className="my-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              value={form.email ? form.email : ""}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* input for username */}
          <div className="my-2">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              value={form.username ? form.username : ""}
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* input for profile picture of input type text */}
          <div className="my-2">
            <label
              htmlFor="profilepic"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Profile Picture
            </label>
            <input
              value={form.profilepic ? form.profilepic : ""}
              onChange={handleChange}
              type="text"
              name="profilepic"
              id="profilepic"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* input for cover pic */}
          <div className="my-2">
            <label
              htmlFor="coverpic"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cover Picture
            </label>
            <input
              value={form.coverpic ? form.coverpic : ""}
              onChange={handleChange}
              type="text"
              name="coverpic"
              id="coverpic"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* input for razorpay id */}
          <div className="my-2">
            <label
              htmlFor="razorpayId"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Razorpay Id
            </label>
            <input
              value={form.razorpayId ? form.razorpayId : ""}
              onChange={handleChange}
              type="text"
              name="razorpayId"
              id="razorpayId"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* input for razorpay secret */}
          <div className="my-2">
            <label
              htmlFor="razorpaySecret"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Razorpay secret
            </label>
            <input
              value={form.razorpaySecret ? form.razorpaySecret : ""}
              onChange={handleChange}
              type="text"
              name="razorpaySecret"
              id="razorpaySecret"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* submit button */}
          <div className="my-6">
            <button
              type="submit"
              className="block w-full p-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm  text-center cursor-pointer "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    
  </>
  )
  
};
  

export default dashboard;
