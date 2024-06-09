import Image from "next/image";
import adv1 from "../../public/assets/adv1.png";
import { LuBell, LuSparkle } from "react-icons/lu";
import adv2 from "../../public/assets/adv2.png";

const Advantages = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="container h-1/2 flex items-center justify-center gap-10">
        <div className="w-1/3 h-full flex flex-col justify-center">
          <h3 className="uppercase text-red pb-1">Advantages</h3>
          <h1 className="text-5xl font-extrabold pb-8">Why choose Uifry?</h1>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 p-2 rounded-full bg-red">
              <LuBell className="w-full h-full text-white" />
            </div>
            <h2 className="text-2xl font-bold">Clever Notifications</h2>
          </div>
          <p className="text-[#888] text-md font-medium">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <div className="w-1/2 h-full">
          <Image
            src={adv1}
            alt="features"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="container h-1/2 flex items-center justify-center gap-10">
        <div className="w-1/2 h-full">
          <Image
            src={adv2}
            alt="features"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-1/3 h-full flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 p-2 rounded-full bg-red">
              <LuSparkle className="w-full h-full text-white" />
            </div>
            <h2 className="text-2xl font-bold">Fully Customizable</h2>
          </div>
          <p className="text-[#888] text-md font-medium">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
