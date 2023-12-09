"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster />
    // We're not using toaster directly because it's a foreign library which means it's not adjusted to Next 13 app router it's a client component (becuase it needs useEffect) that we want to use inside our app so when we are using npm packages like this (not always) we have to create provider or a wrapper around it so it needs to have atleast one client parent
  );
};

export default ToasterProvider;
