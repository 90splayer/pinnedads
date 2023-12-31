"use client";

import { signOut } from "next-auth/react";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";

const Logout = () => {

  const router = useRouter()

  const handleSignOut = async () => {
    // Call the signOut function from NextAuth.js
    await signOut({ redirect: false, callbackUrl: '/' });

    // Clear any client-side storage where session data might be stored
    localStorage.removeItem('next-auth.session-token'); // Example: using localStorage
    router.push('/influencer-login');
  };

  return (
    <div
      onClick={handleSignOut}
      className="pl-14 w-full py-4 flex items-center gap-3 cursor-pointer"
    >
      <h1>LOGOUT</h1>
      <IoIosLogOut />
    </div>
  );
};

export default Logout;
