import React from "react";
import img1 from "../assets/img/Group (4).png";
import img2 from "../assets/img/Group (5).png";

const ExploreCategories = () => {
  return (
    <section className="mt-15">
      <div className="mx-auto px-4">
        <div className="text-center">
          <h2 className="font-['Work_Sans'] font-semibold text-[50px] leading-15 text-[#101828]">
            Explore by Categories.
          </h2>
          <p className="font-['Merriweather'] text-[#475467] text-[16px] leading-6.5 mx-auto mt-4">
            We provide many categories, choose a category according to your
            expertise to make it easier to find a job.
          </p>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row gap-10">
          <div className="lg:w-105 w-full bg-white border border-[#E4E7EC] rounded-xl shadow-sm p-8">
            <h3 className="font-semibold text-[30px] text-[#323A4B] mb-6">
              Popular Categories
            </h3>

            {[
              { name: "Computer - Laptop", count: 10 },
              { name: "Smart phone & Tablets", count: 12 },
              { name: "Fashion & Accessories", count: 14 },
              { name: "Health & Beauty", count: 8 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between py-3">
                  <p className="text-[#667085] text-[16px]">{item.name}</p>
                  <div className="w-8 h-8 bg-[#EEF2F6] rounded-full flex items-center justify-center">
                    <span className="text-[#006D77] text-[12px] font-semibold">
                      {item.count}
                    </span>
                  </div>
                </div>
                {index !== 3 && (
                  <div className="w-full h-px bg-[#E4E7EC]"></div>
                )}
              </div>
            ))}
          </div>

          <div className="flex-1">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white border border-[#E4E7EC] rounded-xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EEF2F6] rounded-full flex items-center justify-center">
                  <img src={img1} alt="" className="w-6 h-6 object-contain" />
                </div>
                <p className="text-[#323A4B] text-[15px] font-medium">
                  Computer for Designer, Art
                </p>
              </div>

              <div className="bg-white border border-[#E4E7EC] rounded-xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EEF2F6] rounded-full flex items-center justify-center">
                  <img src={img1} alt="" className="w-6 h-6 object-contain" />
                </div>
                <p className="text-[#323A4B] text-[15px] font-medium">
                  Sport, Home, Outdoor
                </p>
              </div>

              <div className="bg-white border border-[#E4E7EC] rounded-xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EEF2F6] rounded-full flex items-center justify-center">
                  <img src={img1} alt="" className="w-6 h-6 object-contain" />
                </div>
                <p className="text-[#323A4B] text-[15px] font-medium">
                  Laptop for office, students
                </p>
              </div>

              <div className="bg-white border border-[#E4E7EC] rounded-xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EEF2F6] rounded-full flex items-center justify-center">
                  <img src={img1} alt="" className="w-6 h-6 object-contain" />
                </div>
                <p className="text-[#323A4B] text-[15px] font-medium">
                  Software, card, book
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <div className="bg-white border border-[#E4E7EC] rounded-xl px-12 py-2 flex items-center gap-3 hover:shadow-md transition duration-300 cursor-pointer">
                <div className="w-9 h-9 bg-[#EEF2F6] rounded-full flex items-center justify-center">
                  <img src={img2} alt="" className="w-4 h-4 object-contain" />
                </div>
                <p className="text-[#323A4B] text-[14px] font-medium">
                  Explore More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
