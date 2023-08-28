import Box from "@/components/box";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full relative">
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="text-center">
          <h1 className="text-4xl font-black my-8">Sázky DOBRÁ VĚC</h1>
          <p className="text-xl font-medium">
            PROFI SÁZKOVÉ PORADENSTVÍ - HAZARD měníme v INVESTICI💚
          </p>
          <div className="my-8 w-full flex flex-column md:flex-row items-center gap-8">
            <Box>Box 1</Box>
            <Box>Box 2</Box>
            <Box>Box 3</Box>
          </div>
        </div>
      </div>
    </main>
  );
}
