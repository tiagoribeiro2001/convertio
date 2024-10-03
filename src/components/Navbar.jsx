"use client";

import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  Sheet,
  SheetHeader,
  SheetTrigger,
  SheetDescription,
  SheetContent,
} from "./ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import logo from "../public/images/logo.svg";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/">
        <Image
          alt="logo"
          className="w-40 cursor-pointer dark:invert"
          src={logo}
          height={100}
          width={170}
        />
      </Link>
      <div className="gap-2 hidden md:flex">
        <Link href="/">
          <Button variant="ghost" className="font-semibold text-lg">
            Home
          </Button>
        </Link>
        
        <Link href="/about">
          <Button variant="ghost" className="font-semibold text-lg">
            About
          </Button>
        </Link>
      </div>
      <div className="items-center hidden gap-2 md:flex">
        <Link href="https://github.com/tiagoribeiro2001/convertio">
          <Button
            variant="default"
            className="items-center gap-2 bg-blue-600 rounded-full font-semibold text-lg hidden md:flex"
            size="lg"
          >
            Code
            <BsGithub size={20} />
          </Button>
        </Link>
      </div>

      {/* MOBILE NAV */}
      <div onClick={handleNav} className="z-[99] md:hidden cursor-pointer">
        {/* Condicionalmente renderizar o ícone com efeito de rotação */}
        {nav ? (
          <AiOutlineClose className="text-2xl transform transition-transform duration-300 ease-in-out rotate-180" />
        ) : (
          <AiOutlineMenu className="text-2xl transform transition-transform duration-300 ease-in-out" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white/95 flex flex-col justify-center items-center z-20 transform transition-transform duration-300 ease-in-out gap-4 ${
          nav ? "translate-x-100" : "translate-x-full"
        }`}
      >
        <Link href="/" onClick={handleNav}>
          <Button variant="ghost" className="font-semibold text-lg">
            Home
          </Button>
        </Link>

        <Link href="/about" onClick={handleNav}>
          <Button variant="ghost" className="font-semibold text-lg">
            About
          </Button>
        </Link>

        <Link href="https://github.com/tiagoribeiro2001/convertio">
          <Button
            variant="default"
            className="items-center gap-2 bg-blue-600 rounded-full font-semibold text-lg"
            size="lg"
            onClick={handleNav}
          >
            Code
            <BsGithub size={20} />
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
