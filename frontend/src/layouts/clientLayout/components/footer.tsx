import React from "react";
import Image from "next/image";
import logo from "@assets/imgs/logo.png";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black relative  bottom-0">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 place-items-center gap-8 text-white  py-16">
        <div>
          <Image src={logo} alt={"logo"} />
        </div>
        <Link href={''}>REFUND POLICY</Link>
        <Link href={''}>PRIVACY POLICY</Link>
        <Link href={''}>TERMS OF SERVICE</Link>
        <div className="flex space-x-4">
          <Link href="">
            <FiInstagram size={24} />
          </Link>
          <Link href="">
            <FiFacebook size={24} />
          </Link>
          <Link href="">
            <FiTwitter size={24} />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center text-center">
        <p className="text-white mb-8">
          &copy; 2023 osccpr.com All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
