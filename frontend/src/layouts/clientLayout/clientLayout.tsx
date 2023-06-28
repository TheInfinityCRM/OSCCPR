import React from "react";
import { IClientLayout } from "@customTypes/layouts";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import PromotionalBanner from "./components/promotionBanner";

const ClientLayout: React.FC<IClientLayout> = ({ children }) => {
  return (
    <>
      <PromotionalBanner />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default ClientLayout;
