import React from "react";
import { IClientLayout } from "@customTypes/layouts";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const ClientLayout: React.FC<IClientLayout> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default ClientLayout;
