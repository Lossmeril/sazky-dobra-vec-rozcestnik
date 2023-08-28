"use client";

import LinkBoxes from "@/components/linkBoxes";
import SocialIcons from "@/components/socialIcons";

export default function Home() {
  return (
    <>
      <main className="w-full h-full">
        <div className="min-h-full relative flex flex-col items-center justify-center">
          <img
            src="/img/SDV_color_long.png"
            width="250px"
            className="text-center mx-auto"
          />
          <div className="text-center">
            <h1 className="text-4xl font-bold mt-2 mb-6">Sázky DOBRÁ VĚC</h1>
            <p className="text-xl font-medium">
              Profi sázkové poradentsví - hazard měníme v investici 💚
            </p>
            <LinkBoxes />
            <SocialIcons />
          </div>
        </div>
      </main>
    </>
  );
}
