import Box from "@/components/box";

export default function Home() {
  return (
    <main className="w-full h-full relative">
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Sázky DOBRÁ VĚC</h1>
          <p className="text-xl font-medium">
            Profi sázkové poradentsví - hazard měníme v investici 💚
          </p>
          <div className="mt-12 w-full flex flex-col md:flex-row items-center gap-8">
            <Box
              bgImg="https://sazkydobravec.cz/wp-content/uploads/2021/11/pexels-anna-nekrashevich-6801874.jpg"
              icon="/img/SDV_TELEGRAM.png"
              label="Staňte se naším členem"
              href="https://sazkydobravec.cz"
            >
              <p>
                Podívejte se na náš web a vyberte si z našich členství a
                sázkařských příležitostí!
              </p>
            </Box>
            <Box
              icon="/img/SDV_TELEGRAM.png"
              bgImg="https://sazkydobravec.cz/wp-content/uploads/2021/11/pexels-anna-nekrashevich-6801874.jpg"
              label="Připojte se na náš Telegram!"
            >
              <p>
                Sledujte náš Telegram kanál a získejte tipy na sázení zcela
                zdarma!
              </p>
            </Box>
            <Box
              icon="/img/SDV_TELEGRAM.png"
              bgImg="https://sazkydobravec.cz/wp-content/uploads/2021/11/pexels-anna-nekrashevich-6801874.jpg"
              label="Sázky DOBRÁ VĚC Live"
            >
              <p>
                Sledujte Sázky DOBRÁ VĚC živě pro ještě více obsahu z naší
                sázkařské komunity!
              </p>
            </Box>
          </div>
        </div>
      </div>
    </main>
  );
}
