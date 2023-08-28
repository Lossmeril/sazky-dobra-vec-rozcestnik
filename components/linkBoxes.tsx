import { useMemo } from "react";
import Box from "./box";

const LinkBoxes = () => {
  const boxes = useMemo(
    () => [
      {
        bgImg:
          "https://sazkydobravec.cz/wp-content/uploads/2021/11/pexels-anna-nekrashevich-6801874.jpg",
        icon: "/img/SDV_TELEGRAM.png",
        label: "Staňte se naším členem",
        text: "Podívejte se na náš web a vyberte si z našich členství a sázkařských příležitostí!",
        href: "https://sazkydobravec.cz",
      },
      {
        bgImg:
          "https://sazkydobravec.cz/wp-content/uploads/2021/11/pexels-anna-nekrashevich-6801874.jpg",
        icon: "/img/SDV_TELEGRAM.png",
        label: "Připojte se na náš Telegram!",
        text: "Sledujte náš Telegram kanál a získejte tipy na sázení zcela zdarma!",
        href: "https://sazkydobravec.cz",
      },
      {
        bgImg:
          "https://sazkydobravec.cz/wp-content/uploads/2021/11/pexels-anna-nekrashevich-6801874.jpg",
        icon: "/img/SDV_TELEGRAM.png",
        label: "Sázky DOBRÁ VĚC Live",
        text: "Sledujte Sázky DOBRÁ VĚC živě pro ještě více obsahu z naší sázkařské komunity!",
        href: "https://sazkydobravec.cz",
      },
    ],
    []
  );

  return (
    <div className="mt-12 w-full flex flex-col md:flex-row items-center gap-8">
      {boxes.map((box) => (
        <Box
          bgImg={box.bgImg}
          icon={box.icon}
          label={box.label}
          href={box.href}
          key={box.label}
        >
          <p>{box.text}</p>
        </Box>
      ))}
    </div>
  );
};

export default LinkBoxes;
