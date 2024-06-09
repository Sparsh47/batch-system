const Faq = () => {
  const data = [
    {
      title: "the best financial accounting app ever!",
      desc: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      title: "the best financial accounting app ever!",
      desc: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      title: "the best financial accounting app ever!",
      desc: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      title: "the best financial accounting app ever!",
      desc: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      title: "the best financial accounting app ever!",
      desc: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      title: "the best financial accounting app ever!",
      desc: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center my-20">
      <div className="container h-full flex flex-col justify-center gap-8">
        <div>
          <h3 className="uppercase text-red pb-1">FAQ</h3>
          <h2 className="text-5xl font-extrabold">
            Frequently Asked
            <br /> Questions
          </h2>
        </div>
        <div className="w-full h-full grid grid-cols-2 gap-8">
          {data.map((data, index) => (
            <FaqCard key={index} number={index + 1} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

const FaqCard = ({
  data,
  number,
}: {
  data: { title: string; desc: string };
  number: number;
}) => {
  return (
    <div
      className={`flex flex-col justify-center gap-2 ${
        (number % 2 !== 0 || number % 4 === 0) && number % 4 !== 3
          ? "bg-red text-white"
          : ""
      } rounded-lg p-8`}
    >
      <h2 className="capitalize text-3xl font-bold">{data.title}</h2>
      <p className="text-xl font-light">{data.desc}&quot;</p>
    </div>
  );
};
