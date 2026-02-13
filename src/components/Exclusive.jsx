import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import icon from "../assets/img/Group.png";
import icon2 from "../assets/img/Group (1).png";
import smart from "../assets/img/image_1-removebg-preview (1) 1.png";
import reytingimg from "../assets/img/Group 110.png";

const Exclusive = () => {
  return (
    <div className=" font-['Work_Sans']">
      <div className="flex items-center gap-40 mt-20">
        <div>
          <p className="text-[#98A2B3] font-semibold text-[25px] leading-6.5 tracking-normal pb-8">
            Exclusive Smart Watch
          </p>

          <h3 className="font-semibold text-[32px] w-143 text-[#101828] md:text-[50px] leading-9.5 md:leading-15 pb-8">
            Let go of the Challenge See yourself better
          </h3>
          <p className="font-['Merriweather'] font-normal w-135 text-[#475467] text-[16px] leading-6.5 tracking-[0.045em]">
            Connect your conversations with the tools and services that you use
            to get the job done. With over 1,500 apps and a robust API
          </p>
          <div className="flex gap-6 items-center">
            <div className="w-41.75 bg-[#101828] h-11.25 rounded-sm opacity-100 mt-8 flex items-center justify-center cursor-pointer hover:bg-[#2d3a58] transition duration-300 shadow-md">
              <button className="font-medium text-[16px] text-white leading-6.5 tracking-normal text-center cursor-pointer">
                Get Started
              </button>
              <MoveRight className="text-white ml-2.5" />
            </div>
            <div className="group w-41.75 h-11.25 rounded-sm opacity-100 mt-8 flex items-center justify-center cursor-pointer hover:bg-[#101828] transition duration-300 shadow-md border border-[#101828]">
              <button className="font-medium text-[16px] text-[#101828] cursor-pointer leading-6.5 tracking-normal text-center group-hover:text-white transition duration-300">
                How it works
              </button>
              <MoveRight className="text-[#101828] ml-2.5 group-hover:text-white transition duration-300" />
            </div>
          </div>
          <div className="flex items-center gap-15">
            <div className="flex items-center gap-5 mt-12">
              <div className="w-15 h-15 rounded-full bg-[#BEE1E6] flex items-center justify-center">
                <img src={icon} alt="icon" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <p className="text-[#101828] font-semibold text-[20px] leading-6.5 tracking-normal mt-2">
                  +12K
                </p>
                <p className="text-[#475467] font-normal text-[13px] leading-5 tracking-normal">
                  Projects done
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-12">
              <div className="w-15 h-15 rounded-full bg-[#BEE1E6] flex items-center justify-center">
                <img
                  src={icon2}
                  alt="icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <p className="text-[#101828] font-semibold text-[20px] leading-6.5 tracking-normal mt-2">
                  68K
                </p>
                <p className="text-[#475467] font-normal text-[13px] leading-5 tracking-normal">
                  Custommers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={smart} alt="smart watch" />
          <img
            src={reytingimg}
            alt="reyting"
            className="absolute bottom-0 -right-25"
          />
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
