import React from "react";
import { UserData } from "../data/UserData";

function Footer() {
  const { FooterLink } = UserData;

  return (
    <div className="mb-2 flex items-center justify-center gap-2">
      <div className="font-poppins text-center text-xs">
        © Copyright
      </div>
      <div
        className="cursor-pointer text-sm font-bold tracking-wider"
        onClick={() => {
          window.open(FooterLink);
        }}
      >
        lucamonteiro
      </div>
    </div>
  );
}

export default Footer;
