import Image from "next/image";
import features from "../../public/assets/features.png";
import { LuSparkle } from "react-icons/lu";

const Features = () => {
  const data = [
    {
      title: "Budgetting Intervals",
      icon: LuSparkle,
      desc: "Cum et convallis risus placerat aliquam, nunc. Sceleris quealiquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      title: "Budgetting Intervals",
      icon: LuSparkle,
      desc: "Cum et convallis risus placerat aliquam, nunc. Sceleris quealiquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      title: "Budgetting Intervals",
      icon: LuSparkle,
      desc: "Cum et convallis risus placerat aliquam, nunc. Sceleris quealiquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
  ];

  return (
    <>
      <div className="absolute flex flex-col z-[-20] left-[400px] top-[1050px]">
        <div className="w-[20rem] h-[10rem] rounded-[50%] bg-yellow blur-xl z-[-3]"></div>
        <div className="relative w-[20rem] h-[10rem] rounded-[50%] bg-red bottom-14 blur-xl"></div>
      </div>
      <div className="absolute flex flex-col z-[-20] -right-20 top-[1050px]">
        <div className="relative w-[15rem] h-[12rem] rounded-[50%] bg-red top-28 blur-xl"></div>
        <div className="w-[15rem] h-[12rem] rounded-[50%] bg-yellow blur-xl z-[-3]"></div>
      </div>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="container h-full flex items-center justify-center">
          <div className="w-1/2 h-full">
            <Image
              src={features}
              alt="features"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-2/5 h-full flex flex-col justify-center">
            <h3 className="uppercase text-red pb-1">Features</h3>
            <h1 className="text-5xl font-extrabold pb-8">Uifry Premium</h1>
            <div className="flex flex-col gap-7">
              {data.map((data, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 font-bold">
                    <data.icon className="text-red w-6 h-6" />
                    <h2 className="text-xl">{data.title}</h2>
                  </div>
                  <p className="text-[#888] text-md font-medium">{data.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
