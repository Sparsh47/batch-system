import Button, { ButtonVariant } from "./Button";
import { BsApple } from "react-icons/bs";

const Banner = () => {
  return (
    <>
      <div className="absolute flex flex-col z-[-20] -right-20 top-[1050px]">
        <div className="relative w-[15rem] h-[12rem] rounded-[50%] bg-red top-28 blur-xl"></div>
        <div className="w-[15rem] h-[12rem] rounded-[50%] bg-yellow blur-xl z-[-3]"></div>
      </div>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="banner container h-[80%] rounded-xl">
          <div className="w-full h-full flex flex-col justify-center p-20 gap-5">
            <h1 className="capitalize text-white text-5xl xl:text-6xl font-bold">
              Ready to get started?
            </h1>
            <p className="text-white font-light text-md xl:text-xl">
              Risus habitant leo egestas mauris diam eget morbi tempus
              vulputate.
            </p>
            <Button
              text="Download App"
              variant={ButtonVariant.White}
              Icon={BsApple}
              pos="end"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
