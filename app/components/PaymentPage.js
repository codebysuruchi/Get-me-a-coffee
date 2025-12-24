"use client"
import React,{useState,useEffect} from "react";
import Script from "next/script";
import { useSession } from "next-auth/react";
import { fetchData } from "next-auth/client/_utils";
import { fetchUser,fetchPayments,initiate } from "@/actions/useractions";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from "react-toastify";
import {useRouter} from "next/navigation";

const PaymentPage = ({username}) => { 
    // const { data: session } = useSession(); 
    const [paymentform, setPaymentform] = useState({
        name: "",
        message: "",
        amount: ""
      })

    const [currentUser, setcurrentUser] = useState({})
    const [payments, setpayments] = useState([])
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
      getData()
    }, [])

    useEffect(() => {
        if(searchParams.get("paymentdone") == "true"){
        toast('Thanks for your donation!', {
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
        }
        router.push(`/${username}`);
     
    }, [])
    

const handleChange=(e)=>{
  setPaymentform({...paymentform,[e.target.name]: e.target.value})
}

const getData= async()=>{
  let u =await fetchUser(username)
  setcurrentUser(u)
  let dbpayments = await fetchPayments(username)
  setPaymentform(dbpayments)
  console.log(u,dbpayments);
  
}

    const pay =async(amount)=>{
        //get the order ID
        let a= await initiate(amount,username, paymentform)
        let orderId =a.id
        var options={
             "key":process.env.NEXT_PUBLIC_KEY_ID, //currentUser.razorpayId , // Enter the Key ID generated from the Dashboard, 
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Get me a coffee", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": a.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/razorpay`,
            "prefill": { 
            "name": "Suruchi Kumari", 
            "email": "suruchikumari@gmail.com",
            "contact": "+91000090000" 
        },
         "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            },
        
        "method": {
            "upi": true,
            "upi_qr":true,
            "card": true,
            "netbanking": true,
            "wallet": true,
            
        }
    }
    var rzp1 = new Razorpay(options);
    rzp1.open();
}

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
                theme="light" />
            {/* Same as */}
            <ToastContainer />

      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      

      <div className='cover w-full bg-reg-50 relative'>
      <img className='object-cover w-full h-[400px] ' src={currentUser.coverpic} alt="" />     
      <div className='absolute top-[79%] right-[45%] '>
        <img className=' rounded-full object-cover border-[1.5px] border-white w-40 h-40 ' src={currentUser.profilepic} alt="" />
      </div>
        </div>    
        <div className="info flex flex-col justify-center items-center my-20 gap-3">
           <div className='font-bold text-xl'>@{username}</div>
           <div className='text-slate-300'>Let's help {currentUser.name} get a coffee !</div>
           <div className='text-slate-400'>{payments.length} Payments .      ₹ {payments.reduce((a, b) => a + b.amount, 0)} raised
           </div>

           <div className="payments flex gap-3 w-[80%] mt-11">
            <div className="supporters w-1/2 bg-slate-700 rounded-lg p-10">
              {/*Show List of all the supporters as a leaderboard */}
              <h2 className='text-2xl font-bold '>Supporters</h2>
              <ul className='mx-5 text-lg'>
                {payments.length == 0 && <li>No supporters yet. Be the first one!</li>}
                {payments.map((p,i)=>{
                  return <li className="my-4 flex gap-2 items-center">
                  <img width={32} src="/avatar.gif" alt="use avatar" />
                  <span>{p.name} donated <span className="font-bold">₹{p.amount}</span> With a message "{p.message}"</span>
                </li>
                })}
              </ul>
              </div>

            <div className="makepayment w-1/2 bg-slate-700 rounded-lg p-10">
              <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
              <div className="flex gap-2 flex-col">
                <div>
                <input onChange={handleChange} value={paymentform.name} name="name" type="text" className='w-full p-3 rounded-lg bg-slate-600' placeholder='Enter Name'  />
                </div>
                <input onChange={handleChange} value={paymentform.message} name="message" type="text" className='w-full p-3 rounded-lg bg-slate-600' placeholder='Enter Message'  />
                <input onChange={handleChange} value={paymentform.amount} name="amount" type="text" className='w-full p-3 rounded-lg bg-slate-600' placeholder='Enter Amount'  />
                
                <button className=' bg-slate-600 p-3  text-white bg-gradient-to-r from-purple-800 to-pink-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center disabled:bg-slate-600 disabled:from-purple-100' disabled={paymentform.name?.length<3 || paymentform.message?.length<4} onClick={()=>pay(paymentform.amount * 100)}>Pay</button>
                
              </div>
              <div className="flex gap-3 mt-5">
                <button className="bg-slate-600 p-3 rounded-lg" onClick={()=>pay(1000)}>pay ₹10</button>
                <button className="bg-slate-600 p-3 rounded-lg" onClick={()=>pay(2000)}>pay ₹20</button>
                <button className="bg-slate-600 p-3 rounded-lg" onClick={()=>pay(3000)}>pay ₹30</button>
              </div>
            </div>
           </div>
    </div>
    </>
  );
};

export default PaymentPage;
