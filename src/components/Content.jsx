// Content.jsx
import React from "react";
import televizor from "../assets/img/713JEi+CQDL 1.png";
import quloqchin from "../assets/img/images__47_-removebg-preview 1.png";
import quloqchin2 from "../assets/img/image_4-removebg-preview (1) 1.png";

const products = [
  {
    id: 1,
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    price: "$29.80",
    img: televizor,
  },
  {
    id: 2,
    title: "Cancelling Headset Music Sport Deep Bass",
    price: "$420.00",
    img: quloqchin,
  },
  {
    id: 3,
    title: "T500BT Original Wireless Bluetooth Headphone Deep",
    price: "$96.50",
    img: quloqchin2,
  },
];

const Content = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="flex gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 w-full bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
          >
            <div className="w-17.5 h-17.5 shrink-0 rounded-md overflow-hidden flex items-center justify-center">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-[14px] font-medium text-[#323A4B] leading-5 line-clamp-2">
                {item.title}
              </h3>
              <span className="text-[14px] font-semibold text-[#101828]">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
