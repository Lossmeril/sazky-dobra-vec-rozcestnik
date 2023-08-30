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
      <div className="w-[350px] h-[200px] md:w-[450px] md:h-[200px] lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px] outline outline-1 outline-medium rounded-lg relative overflow-hidden bg-mint-50 custom-box hover:bg-mint-200 transition sazky-corners shadow-lg">
        <div
          className="w-[350px] h-[200px] md:w-[450px] md:h-[200px] lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-cover bg-no-repeat transition opacity-10 custom-box-bg"
          style={{ backgroundImage: "url('" + bgImg + "')" }}
        ></div>
        <div className="py-12 h-full w-[80%] mx-auto flex flex-row lg:flex-col gap-12 lg:gap-6 justify-between lg:justify-evenly items-center z-30 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Image src={icon} alt="Telegram" width={75} height={75} />

          <h2 className="font-bold text-xl lg:text-2xl xl:text-3xl hidden lg:inline">
            {label}
          </h2>
          <div className="hidden lg:inline">{children}</div>

          <div className="flex flex-col text-left lg:text-center justify-between lg:hidden">
            <h2 className="font-bold text-xl lg:text-2xl xl:text-3xl">
              {label}
            </h2>
            {children}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Box;
