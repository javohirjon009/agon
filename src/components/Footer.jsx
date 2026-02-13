import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import logo from "../assets/img/Group 112.png";

const Footer = () => {
  return (
    <footer>
      <div className=" px-4 py-14">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-[#D6D8DD]">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Agon Logo" className="h-10 object-contain" />
          </div>

          <div className="flex items-center gap-6">
            <p className="text-[#475467] text-sm">Ready to get started?</p>
            <button className="bg-[#101828] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#2d3a58] transition duration-300">
              Create an Account
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 py-12 border-b border-[#D6D8DD]">
          <div>
            <h4 className="text-[#101828] font-semibold mb-4">Contact</h4>
            <p className="text-sm text-[#667085] mb-2">
              4517 Washington Ave. <br />
              Manchester, Kentucky 39495
            </p>
            <p className="text-sm text-[#667085] mb-1">(239) 555-0108</p>
            <p className="text-sm text-[#1570EF] mb-4 cursor-pointer hover:underline">
              contact@agon.com
            </p>

            <div className="flex gap-3 text-[#667085]">
              <Facebook size={18} className="cursor-pointer hover:text-black" />
              <Instagram
                size={18}
                className="cursor-pointer hover:text-black"
              />
              <Twitter size={18} className="cursor-pointer hover:text-black" />
              <Linkedin size={18} className="cursor-pointer hover:text-black" />
            </div>
          </div>

          <div>
            <h4 className="text-[#101828] font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm text-[#667085]">
              <li className="hover:text-black cursor-pointer">About V1</li>
              <li className="hover:text-black cursor-pointer">About V2</li>
              <li className="hover:text-black cursor-pointer">About V3</li>
              <li className="hover:text-black cursor-pointer">Services V1</li>
              <li className="hover:text-black cursor-pointer">Services V2</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#101828] font-semibold mb-4">Discover</h4>
            <ul className="space-y-2 text-sm text-[#667085]">
              <li className="hover:text-black cursor-pointer">Our Blog</li>
              <li className="hover:text-black cursor-pointer">Our Blog V1</li>
              <li className="hover:text-black cursor-pointer">Our Blog V2</li>
              <li className="hover:text-black cursor-pointer">Blog Single</li>
              <li className="hover:text-black cursor-pointer">Page 404</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#101828] font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-[#667085]">
              <li className="hover:text-black cursor-pointer">FAQs</li>
              <li className="hover:text-black cursor-pointer">FAQ V2</li>
              <li className="hover:text-black cursor-pointer">Career</li>
              <li className="hover:text-black cursor-pointer">Career Detail</li>
              <li className="hover:text-black cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#101828] font-semibold mb-4">Useful links</h4>
            <ul className="space-y-2 text-sm text-[#667085]">
              <li className="hover:text-black cursor-pointer">Shop</li>
              <li className="hover:text-black cursor-pointer">Shop V2</li>
              <li className="hover:text-black cursor-pointer">Pricing V1</li>
              <li className="hover:text-black cursor-pointer">Pricing V2</li>
              <li className="hover:text-black cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-[#667085]">
          <p>©Agon Official 2022</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-black cursor-pointer">
              Privacy policy
            </span>
            <span className="hover:text-black cursor-pointer">Cookies</span>
            <span className="hover:text-black cursor-pointer">
              Terms of service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
