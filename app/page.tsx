import Box from "@/components/box";

export default function Home() {
  return (
    <main className="w-full h-full relative">
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="text-center">
          <h1 className="text-4xl font-bold my-8">Sázky DOBRÁ VĚC</h1>
          <p className="text-xl font-medium">
            Profi sázkové poradentsví - hazard měníme v investici 💚
          </p>
          <div className="mt-12 w-full flex flex-col md:flex-row items-center gap-8">
            <Box
              bgImg="https://sazkydobravec.cz/wp-content/uploads/2021/11/pexels-anna-nekrashevich-6801874.jpg"
              label="Staňte se naším členem"
            >
              Podívejte se na náš web a vyberte si z našich členství a
              sázkařských příležitostí!
            </Box>
            <Box
              bgImg="https://sazkydobravec.cz/wp-content/uploads/2021/11/pexels-anna-nekrashevich-6801874.jpg"
              label="Připojte se na náš Telegram!"
            >
              Sledujte náš Telegram a získejte sázkařské tipy zdarma!
            </Box>
            <Box
              bgImg="https://sazkydobravec.cz/wp-content/uploads/2021/11/pexels-anna-nekrashevich-6801874.jpg"
              label="Sázky DOBRÁ VĚC Live"
            >
              Box 3
            </Box>
          </div>
        </div>
      </div>
    </main>
  );
}
