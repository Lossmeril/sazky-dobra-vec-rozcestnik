"use client";

import LinkBoxes from "@/components/linkBoxes";
import SocialIcons from "@/components/socialIcons";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-12 md:hidden"></div>
      <main className="w-full h-full px-12">
        <div className="min-h-full relative flex flex-col items-center justify-center">
          <Image
            alt="Sázky DOBRÁ VĚC logo"
            src="/img/logo.png"
            width={184}
            height={72}
            className="text-center mx-auto mb-8"
          />
          <div className="text-center">
            <h1 className="text-4xl font-bold mt-2 mb-6">Sázky DOBRÁ VĚC</h1>
            <p className="text-xl font-medium">
              Profi sázkové poradentsví - měníme hazard v investici 💚
            </p>
            <LinkBoxes />
            <SocialIcons />
          </div>
        </div>
      </main>
      <div className="h-12 md:hidden"></div>
    </>
  );
}
