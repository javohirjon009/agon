import React, { useState } from "react";
import bannerimg from "../assets/img/medium-shot-smiley-colleagues-working-together 1.png";

const Banner = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Rahmat! Siz ${email} orqali obuna bo'ldingiz.`);
      setEmail("");
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <div className="relative bg-[#0F766E] rounded-[28px] overflow-hidden shadow-xl">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal-700/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-500/20 rounded-full blur-2xl"></div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 px-8 py-12 lg:px-16">
          <div className="flex-1 max-w-md text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Bizning yangiliklarga <br className="hidden sm:block" />
              obuna bo'ling
            </h2>

            <p className="text-sm text-white/80 mb-8 leading-relaxed">
              Eng so'nggi yangiliklar va foydali ma'lumotlarni birinchilardan
              bo'lib oling. Tugmani bosish orqali shartlarga rozilik berasiz.
            </p>

            <form
              onSubmit={handleSubmit}
              className="relative max-w-sm mx-auto lg:mx-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Elektron manzilingizni kiriting..."
                required
                className="w-full h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-6 pr-16 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white/20 transition-all duration-300"
              />

              <button
                type="submit"
                className="absolute right-1.5 top-1.5 w-11 h-11 bg-teal-500 hover:bg-teal-400 active:scale-95 transition-all duration-300 rounded-full flex items-center justify-center text-white shadow-md"
              >
                →
              </button>
            </form>
          </div>

          <div className="relative flex-1 flex items-center justify-center lg:justify-end">
            <div>
              <img
                src={bannerimg}
                alt="Team Work"
                className="w-full max-w-105 h-80 aspect-4/3 object-cover rounded-2xl"
              />
            </div>

            <div className="absolute -left-6 bottom-8 lg:-left-12 lg:bottom-12 animate-float">
              <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100 w-45">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                    📈
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase">
                      O'sish sur'ati
                    </p>
                    <p className="text-sm font-bold text-gray-800">+24.5%</p>
                  </div>
                </div>

                <div className="flex gap-1 items-end h-8">
                  <div className="w-2 bg-teal-200 h-1/2 rounded-t-sm"></div>
                  <div className="w-2 bg-teal-300 h-2/3 rounded-t-sm"></div>
                  <div className="w-2 bg-teal-400 h-full rounded-t-sm"></div>
                  <div className="w-2 bg-teal-500 h-3/4 rounded-t-sm"></div>
                  <div className="w-2 bg-teal-600 h-5/6 rounded-t-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Banner;
