import Image from "next/image";
import heroMain from "../../public/assets/heroIphones.png";
import heroBelow from "../../public/assets/hero2.png";
import Button, { ButtonVariant } from "./Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoPlayCircleOutline } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <div className="absolute flex flex-col z-[-20] left-[500px] top-[100px]">
        <div className="relative w-[18rem] h-[8rem] rounded-[50%] bg-red top-14 blur-xl"></div>
        <div className="w-[18rem] h-[8rem] rounded-[50%] bg-yellow blur-xl z-[-3]"></div>
      </div>
      <div className="absolute w-[18rem] h-[12rem] rounded-[50%] bg-red blur-xl z-[-3] bottom-20 right-[26rem]"></div>
      <div
        className="w-full flex items-center justify-center py-20"
        style={{ height: "calc(100vh - 120px)" }}
      >
        <div className="container h-full flex items-center justify-center">
          <div className="w-[50%] h-full flex flex-col justify-around">
            <div className="flex flex-col gap-5">
              <h1 className="capitalize text-7xl font-extrabold">
                Make the best
                <br /> financial decisions
              </h1>
              <p>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
              <div className="flex items-center gap-5">
                <Button
                  text="Get Started"
                  pos="end"
                  variant={ButtonVariant.Filled}
                  Icon={IoIosArrowRoundForward}
                />
                <Button
                  text="Watch Video"
                  pos="start"
                  variant={ButtonVariant.Ghost}
                  Icon={IoPlayCircleOutline}
                />
              </div>
            </div>
            <div className="w-[80%] aspect-auto">
              <Image
                src={heroBelow}
                alt="heroTwo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="w-[50%] aspect-auto">
            <Image
              src={heroMain}
              alt="heroPhones"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
