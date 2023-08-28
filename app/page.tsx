import Box from "@/components/box";
import LinkBoxes from "@/components/linkBoxes";
import SocialIcons from "@/components/socialIcons";

export default function Home() {
  return (
    <main className="w-full h-full relative">
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Sázky DOBRÁ VĚC</h1>
          <p className="text-xl font-medium">
            Profi sázkové poradentsví - hazard měníme v investici 💚
          </p>
          <LinkBoxes />
          <SocialIcons />
        </div>
      </div>
    </main>
  );
}
