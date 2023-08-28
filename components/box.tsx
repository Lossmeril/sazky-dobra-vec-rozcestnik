interface BoxProps {
  label?: string;
  bgImg?: string;
  href?: string;
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className="w-[300px] h-[300px] outline outline-1 outline-neutral-800 rounded-lg relative">
      {children}
    </div>
  );
};

export default Box;
