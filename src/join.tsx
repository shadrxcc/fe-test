import React from "react";
import odg from "./assets/odg.png";
import wiz from "./assets/wiz.png";
import tiwa from "./assets/tiwa.png";
import davido from "./assets/001.png";
import rema from "./assets/rema.png";

const Join = () => {
  return (
    <div className="py-60">
      <div className="flex flex-col space-y-[18px]">
        <h1 className="text-2xl sm:text-[38px] lg:inline-flex lg:flex-col text-center leading-[59px] tracking-[3%] font-durk ">
          JOIN TOP ARTISTS, <span> BUILD YOUR{" "}
          <span className="text-lemon">FANBASE</span></span>
        </h1>
        <p className="text-[#6F767E] lg:inline-flex lg:flex-col text-[19px] text-center leading-[32px]">
          Figma files can also be downloaded from our store. These <span> files
          include the latest Figma features and are synced</span>
        </p>
      </div>

      <div className="relative hidden">
        <img width={196} className="" src={wiz} alt="" />
        <img width={196} className="" src={odg} alt="" />
        <img width={196} className="" src={tiwa} alt="" />
        <img width={196} className="" src={rema} alt="" />
        <img width={196} className="" src={davido} alt="" />
      </div>
    </div>
  );
};

export default Join;
