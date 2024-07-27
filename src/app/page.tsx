"use client";

import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='relative w-screen h-screen bg-gradient-to-b from-white to-custom-purple'>
      {loggedIn ? <Signup /> : <Login />}
    </div >
  );
}
