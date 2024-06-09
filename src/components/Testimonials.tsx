import Image from "next/image";
import testimonials from "../../public/assets/testimonials.png";
import people from "../../public/assets/testi2.png";

const Testimonials = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center pt-8">
        <h3 className="uppercase pb-1">Testimonials</h3>
        <h1 className="text-5xl font-extrabold capitalize text-center">
          What our users
          <br /> say about us?
        </h1>
      </div>
      <div className="container h-full flex items-center justify-evenly">
        <div className="w-2/5 h-full">
          <Image
            src={testimonials}
            alt="features"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-2/5 h-full flex flex-col justify-center gap-7">
          <h1 className="text-4xl font-bold">
            The Best Financial Accounting App Ever!
          </h1>
          <p className="text-[#888] text-md font-medium">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <Image src={people} alt="people" className="h-10 aspect-auto" />
          <p className="font-bold text-lg">Nick Jonas</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
