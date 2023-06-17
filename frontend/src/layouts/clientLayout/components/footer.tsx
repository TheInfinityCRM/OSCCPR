import React from "react";
import Image from "next/image";
import logo from "@assets/imgs/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black relative  bottom-0">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6 text-white  py-16">
        <div>
          <Image src={logo} alt={"logo"} />
        </div>
        <div>REFUND POLICY</div>
        <div>TERMS OF SERVICE</div>
        <div className="flex space-x-2">
          <span className="px-2 py-1 bg-white rounded-md text-black font-semibold">
            IG
          </span>
          <span className="px-2 py-1 bg-white rounded-md text-black font-semibold">
            FB
          </span>
          <span className="px-2 py-1 bg-white rounded-md text-black font-semibold">
            TW
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center text-center">
          <p className="text-white mb-8">&copy; 2023 osccpr.com All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
