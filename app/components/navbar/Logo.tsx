"use client";

import Image from "next/image";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation"; // In Next 13 you have to import useRouter form next/navigation package

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="/images/logo.png"
    />
  );
};

export default Logo;
