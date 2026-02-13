import logo from "../assets/img/Group 112.png";

const Header = () => {
  const handleClick = () => {
    alert("Get Started bosildi!");
  };
  return (
    <div>
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-14">
          <a
            className="text-[#101828] text-lg font-semibold hover:text-[#2d3a58] transition duration-300"
            href="#"
          >
            Home
          </a>
          <a
            className="text-[#101828] text-lg font-semibold hover:text-[#2d3a58] transition duration-300"
            href="#"
          >
            About
          </a>
          <a
            className="text-[#101828] text-lg font-semibold hover:text-[#2d3a58] transition duration-300"
            href="#"
          >
            Company
          </a>
          <a
            className="text-[#101828] text-lg font-semibold hover:text-[#2d3a58] transition duration-300"
            href="#"
          >
            Pages
          </a>
          <a
            className="text-[#101828] text-lg font-semibold hover:text-[#2d3a58] transition duration-300"
            href="#"
          >
            Blog
          </a>
          <a
            className="text-[#101828] text-lg font-semibold hover:text-[#2d3a58] transition duration-300"
            href="#"
          >
            Shop
          </a>
        </nav>

        {/* Button */}
        <button
          onClick={handleClick}
          className="w-34.25 h-11.25 rounded-[47px] bg-[#101828] text-white font-semibold hover:bg-[#2d3a58] transition duration-300  shadow-md cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
