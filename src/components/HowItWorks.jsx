import React from "react";
import startplanimg from "../assets/img/Group (6).png";
import connect from "../assets/img/Group (7).png";
import match from "../assets/img/Vector.png";
import complete from "../assets/img/Group (8).png";
import review from "../assets/img/Group (9).png";

const HowItWorks = () => {
  return (
    <section className="py-14">
      <div className=" mx-auto px-4 text-center">
        <div className="inline-block bg-[#FCE7DA] text-[#F27A54] text-sm px-4 py-1 rounded-full mb-6">
          How It Work ?
        </div>

        <h2 className="font-semibold text-[40px] md:text-[50px] leading-15 text-[#101828] max-w-175 mx-auto">
          Cross-border ordering has
          <br />
          never been easier
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <div className="bg-[#FFF3EA] rounded-xl px-0 py-13 w-70 h-auto flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={startplanimg} alt="Start Plan" />
              </div>
            </div>
            <h3 className="mt-6 text-[22px] font-semibold text-[#101828]">
              Start Plan
            </h3>
            <p className="text-[#667085] text-sm mt-2">
              Choose any of
              <br />
              our packages
            </p>
          </div>

          <div className="bg-[#FDE2E4] rounded-xl px-0 py-13 w-70 h-auto flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={connect} alt="Connect" />
              </div>
            </div>
            <h3 className="mt-6 text-[22px] font-semibold text-[#101828]">
              Connect
            </h3>
            <p className="text-[#667085] text-sm mt-2">
              Receive concepts
              <br />
              In 24 hours
            </p>
          </div>

          <div className="bg-[#DBECE5] rounded-xl px-0 py-13 w-70 h-auto flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={match} alt="Match" />
              </div>
            </div>
            <h3 className="mt-6 text-[22px] font-semibold text-[#101828]">
              Match
            </h3>
            <p className="text-[#667085] text-sm mt-2">
              Development
              <br />
              Stage
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-3xl mx-auto">
          <div className="bg-[#DBECE5] rounded-xl px-0 py-13 w-70 h-auto flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={complete} alt="Complete" />
              </div>
            </div>
            <h3 className="mt-6 text-[22px] font-semibold text-[#101828]">
              Complete
            </h3>
            <p className="text-[#667085] text-sm mt-2">
              After-release
              <br />
              Support
            </p>
          </div>

          <div className="bg-[#D1ECFD] rounded-xl px-0 py-13 w-70 h-auto flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={review} alt="Review" />
              </div>
            </div>
            <h3 className="mt-6 text-[22px] font-semibold text-[#101828]">
              Review
            </h3>
            <p className="text-[#667085] text-sm mt-2">
              Project launch
              <br />
              and checkout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
