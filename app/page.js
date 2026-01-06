import React from "react";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center text-white h-[44vh] items-center">
      <div className="text-3xl font-bold flex gap-3"> Buy Me A Coffee <span className=""><img src="/coffee.gif" width={40}  alt="" /></span> </div>
      <p className="text-center md:text-left py-1.5">A crowdfunding platform for creators to fund their projects.</p>
      <p className="text-center md:text-left ">
          A place where your fans can buy you a coffee. Unleash the power of your fans and get your projects funded.
        </p>
      <div className="gap-4 py-8">
         <Link href={"/login"}>
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button></Link>

        <Link href="/about">
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button></Link>
      </div>
    </div>
      <div className="bg-white h-1 opacity-10">
      </div>
      <div className="text-white container mx-auto py-32">
        <h2 className=" font-bold text-2xl text-center mb-14">Your Fans can buy you a coffee</h2>
        <div className="flex gap-5 justify-around ">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-gray-500 rounded-full p-2 text-black " src="/women.gif" width={100} alt="" />
            <p className="font-bold text-white">Fund Yourself</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-gray-500 rounded-full p-2 text-black " src="/coin.gif" width={100} alt="" />
            <p className="font-bold text-white">Fund Yourself</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-gray-500 rounded-full p-2 text-black " src="/group.gif" width={100} alt="" />
            <p className="font-bold text-white"> Fans want to help you</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

    <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        {/* Responsive youtube embed  */}
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/ojuUnfqnUI0?si=wMUv4DG3ia6Wt4zn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

          </div>
      
      </div>
    </>
  );
}
