import { useMemo } from "react";
import Box from "./box";

const LinkBoxes = () => {
  const boxes = useMemo(
    () => [
      {
        bgImg: "/img/bg1.jpg",
        icon: "/img/SDV_BUY A MEMBERSHIP.png",
        label: "Staňte se naším členem",
        text: "Podívejte se na náš web a vyberte si z našich členství a sázkařských příležitostí!",
        href: "https://sazkydobravec.cz",
      },
      {
        bgImg: "/img/bg2.jpg",
        icon: "/img/SDV_TELEGRAM.png",
        label: "Připojte se na náš Telegram!",
        text: "Sledujte náš Telegram kanál a získejte tipy na sázení zcela zdarma!",
        href: "https://t.me/SazkyDobraVec_telegram",
      },
      {
        bgImg: "img/bg.jpg",
        icon: "/img/SDV_icon_LIVE.png",
        label: "Sázky DOBRÁ VĚC Live",
        text: "Sledujte Sázky DOBRÁ VĚC živě pro ještě více obsahu z naší sázkařské komunity!",
        href: "https://t.me/SazkyDobraVecLiveTips",
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
