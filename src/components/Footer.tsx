import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { IoIosCall, IoMdMail } from "react-icons/io";
import Button, { ButtonVariant } from "./Button";

const Footer = () => {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <div className="container h-full flex flex-col items-center justify-center gap-6">
        <div className="w-4/5 h-1/2 flex items-center justify-between">
          <div className="w-1/5 h-full flex flex-col items-start gap-4">
            <Image src={logo} alt="logo" className="h-8 aspect-auto" />
            <div className="flex items-center gap-3 font-medium">
              <IoMdMail className="w-6 h-6 text-red" />
              Help@Frybix.Com
            </div>
            <div className="flex items-center gap-3 font-medium">
              <IoIosCall className="w-6 h-6 text-red" />
              +1234 456 678 89
            </div>
          </div>
          <div className="w-1/6 h-full flex flex-col items-start gap-4">
            <h2 className="text-2xl font-extrabold">Links</h2>
            <p className="font-semibold">Home</p>
            <p className="font-semibold">About Us</p>
            <p className="font-semibold">Bookings</p>
            <p className="font-semibold">Blogs</p>
          </div>
          <div className="w-1/5 h-full flex flex-col items-start gap-4">
            <h2 className="text-2xl font-extrabold">Legal</h2>
            <p className="font-semibold">Terms of Use</p>
            <p className="font-semibold">Privacy Policy</p>
            <p className="font-semibold">Cookie Policy</p>
          </div>
          <div className="w-1/5 h-full flex flex-col items-start gap-4">
            <h2 className="text-2xl font-extrabold">Product</h2>
            <p className="font-semibold">Take Tour</p>
            <p className="font-semibold">Live Chat</p>
            <p className="font-semibold">Reviews</p>
          </div>
          <div className="w-1/4 h-full flex flex-col items-start gap-4">
            <h2 className="text-2xl font-extrabold">Newsletter</h2>
            <p className="font-semibold">Stay Up To Date</p>
            <div className="w-full flex justify-center items-center">
              <input
                type="email"
                placeholder="Your email"
                className="border-0 outline-none w-full h-full p-2 font-medium rounded"
              />
              <Button text="Subscribe" variant={ButtonVariant.Filled} />
            </div>
          </div>
        </div>
        <hr className="w-4/5 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent" />
        <div></div>
        <h2 className="text-md font-semibold">
          Copyright {new Date().getFullYear()} Uifry.com All Rights Reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
