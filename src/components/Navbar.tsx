import Image from "next/image";
import logo from "../../public/assets/logo.png";
import Button from "./Button";

const Navbar = () => {
  const links = ["Home", "About Us", "Pricing", "Features"];

  return (
    <div className="w-full h-[120px] flex items-center justify-center z-10">
      <div className="container h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Image src={logo} alt="logo" />
          <div className="flex items-center gap-5 font-semibold">
            {links.map((link, index) => (
              <div key={index}>{link}</div>
            ))}
          </div>
        </div>
        <Button text="Download" variant="filled" />
      </div>
    </div>
  );
};

export default Navbar;
