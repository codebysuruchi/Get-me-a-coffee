import React from "react";
import PaymentPage from "../components/PaymentPage";
import { notFound } from "next/navigation";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

const Username = async ({params}) => {
  const resolvedParams = await params;

  // if the username is not present in the databse , show a 404 page
  const checkUser = async () => {
    await connectDb()
    let u = await User.findOne({username:resolvedParams.username})

    if(!u){
      return notFound()
  }
}

await checkUser()
  
    
    return (
      <>
      <PaymentPage username={resolvedParams.username} />
    </>
  );

};

export default Username;

// export async function generateMetadata({ params }) {
//   return {
//     title: `Support ${params.username} - Get Me A Chai`,
//   }
// }