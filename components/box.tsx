interface BoxProps {
  label?: string;
  bgImg: string;
  href?: string;
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ label, bgImg, children }) => {
  return (
    <div className="w-[250px] h-[250px] lg:h-[300px] lg:w-[300px] outline outline-1 outline-neutral-600 rounded-lg relative overflow-hidden bg-black custom-box">
      <div
        className="w-[250px] h-[250px] lg:h-[300px] lg:w-[300px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-cover bg-no-repeat transition opacity-20 custom-box-bg"
        style={{ backgroundImage: "url('" + bgImg + "')" }}
      ></div>
      <div className="h-full w-[80%] mx-auto flex flex-col justify-evenly z-30 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="font-bold text-3xl mb-4">{label}</h2>
        <p className="">{children}</p>
      </div>
    </div>
  );
};

export default Box;
