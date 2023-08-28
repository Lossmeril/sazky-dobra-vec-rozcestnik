import Image from "next/image";

interface BoxProps {
  label: string;
  icon: string;
  bgImg: string;
  href?: string;
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ label, icon, bgImg, href, children }) => {
  return (
    <a href={href} target="_blank">
      <div className="w-[250px] h-[250px] lg:h-[350px] lg:w-[350px] outline outline-1 outline-medium rounded-lg relative overflow-hidden bg-light custom-box hover:bg-medium transition sazky-corners">
        <div
          className="w-[250px] h-[250px] lg:h-[350px] lg:w-[350px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-cover bg-no-repeat transition opacity-10 custom-box-bg"
          style={{ backgroundImage: "url('" + bgImg + "')" }}
        ></div>
        <div className="h-full w-[80%] mx-auto flex flex-col justify-evenly items-center z-30 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Image src={icon} alt="Telegram" width={100} height={100} />
          <h2 className="font-bold text-3xl">{label}</h2>
          {children}
        </div>
      </div>
    </a>
  );
};

export default Box;
