"use client";
import React from "react";
import Link from "next/link";
import {
  AiFillBuild,
  AiFillHome,
  AiOutlineLogin,
  AiOutlineUser,
} from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import PagesLink from "./PageLinks";
import PageMode from "./PageMode";
import { useAuthContext } from "@/context/AuthContext";
import { getAuth, signOut } from "firebase/auth"; // Import signOut from firebase/auth

const Header = () => {
  const { user } = useAuthContext();
  console.log(user);

  const auth = getAuth(); // Get the Auth instance

  const handleLogout = async () => {
    try {
      await signOut(auth); // Call signOut with the Auth instance
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="flex justify-between items-center p-6 max-w-6xl m-auto">
      <div className="flex">
        {user ? (
          <>
            <PagesLink url="/" title="home" Icon={AiFillHome} />
            <PagesLink url="/about" title="about" Icon={BsInfoCircleFill} />
            <PagesLink url="/signin" title="signin" Icon={AiOutlineLogin} />
            <PagesLink
              url="/signin"
              onClick={handleLogout}
              title="logout"
              Icon={AiOutlineUser}
            />
            <PagesLink url="/user" title="user" Icon={AiOutlineUser} />
          </>
        ) : (
          <PagesLink url="/signup" title="signup" Icon={AiFillBuild} />
        )}
      </div>

      <div className="flex items-center space-x-4">
        <PageMode />
        <Link href="/">
          <h2>
            <span className="text-2xl bg-cyan-500 px-2 py-1 rounded-lg text-white font-bold mr-1">
              Movie List
            </span>
            <span className="text-xl hidden sm:inline"> </span>
          </h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
