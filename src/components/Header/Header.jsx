import React from "react";
import Link from "next/link";
import { AiFillBuild, AiFillHome, AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import PagesLink from "./PageLinks";
import PageMode from "./PageMode";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 max-w-6xl m-auto">
      <div className="flex">
        <PagesLink url="/" title="home" Icon={AiFillHome} />
        <PagesLink url="/about" title="about" Icon={BsInfoCircleFill} />
        <PagesLink url="/signin" title="signin" Icon={AiOutlineLogin} />
        <PagesLink url="/signup" title="signup" Icon={AiFillBuild} />
        <PagesLink url="/user" title="user" Icon={AiOutlineUser} />
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
