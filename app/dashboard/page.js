"use client";
import React,{useEffect} from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Dashboard from "../components/Dashboard";

const dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

 useEffect(() => {
  document.title=" Dashboard - Get me a coffee "
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  return <div>
    <Dashboard/>
  </div>;
};

export default dashboard;


