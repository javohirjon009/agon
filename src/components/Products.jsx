import React from "react";
import products from "../data/products.json";
import { Star } from "lucide-react";

const Products = () => {
  return (
    <div>
      <div className="w-119.25 h-31.75 opacity-100 m-auto">
        <p className="text-[#101828] font-semibold text-[50px] leading-15 text-center">
          Featured Products For Pre-Order
        </p>
      </div>
      <div className="py-8 px-4">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 12).map((product) => (
              <div
                key={product.id}
                className="relative bg-white border border-[#E4E7EC] rounded-xl p-5 hover:shadow-lg transition duration-300"
              >
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-[#101828] text-white text-xs px-2 py-1 rounded-full">
                    {product.discount}%
                  </div>
                )}
                <div className="w-full h-45 flex items-center justify-center mb-4">
                  <img
                    src={`${product.image}`}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <p className="text-[13px] text-[#576071] mb-1">
                  {product.brand}
                </p>

                <h3 className="text-[15px] font-semibold text-[#323A4B] leading-5 mb-2 min-h-12">
                  {product.title}
                </h3>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={
                        index < product.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-[#006D77] font-semibold text-[16px]">
                    ${product.price.toFixed(2)}
                  </p>

                  <button className="bg-[#BEE1E6] text-[#006D77] text-[12px] px-3 py-1 rounded-md hover:bg-[#0E9384] hover:text-white transition duration-300 cursor-pointer">
                    Add +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
