import React from "react";
import { BsGithub } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";
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
      <div className="hidden gap-1 md:gap-2 lg:gap-4 md:flex">
        <Button variant="ghost" className="font-semibold text-md">
          <Link href="/">Home</Link>
        </Button>
        <Link href="/about">
          <Button variant="ghost" className="font-semibold text-md">
            About
          </Button>
        </Link>
      </div>
      <div className="items-center hidden gap-2 md:flex">
        <Link href="https://github.com/tiagoribeiro2001/convertio">
          <Button
            variant="default"
            className="items-center hidden gap-2 bg-blue-600 rounded-full w-fit md:flex"
            size="lg"
          >
            <span>Code</span>
            <BsGithub size={20} />
          </Button>
        </Link>
      </div>

      {/* MOBILE NAV */}
      <Sheet>
        <SheetTrigger className="block p-3 md:hidden">
          <span className="text-2xl text-slate-950 dark:text-slate-200">
            <LuMenu />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="flex flex-col w-full h-full">
                <SheetTrigger asChild>
                  <Link href="/">
                    <Button
                      variant="link"
                      className="w-full font-semibold text-md"
                    >
                      Home
                    </Button>
                  </Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link href="/about">
                    <Button
                      variant="link"
                      className="w-full font-semibold text-md"
                    >
                      About
                    </Button>
                  </Link>
                </SheetTrigger>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default Navbar;
