import { useMemo } from "react";
import Image from "next/image";

const SocialIcons = () => {
  const socials = useMemo(
    () => [
      {
        icon: "SDV_EMAIL.png",
        label: "Email",
        href: "mailto:info@sazkydobravec.cz",
      },
      {
        icon: "SDV_INSTAGRAM.png",
        label: "Instagram",
        href: "https://instagram.com/sazkydobravec",
      },
      {
        icon: "SDV_TELEGRAM.png",
        label: "Telegram",
        href: "https://t.me/SazkyDobraVec_telegram",
      },
      {
        icon: "SDV_WEB.png",
        label: "Web",
        href: "https://sazkydobravec.cz",
      },
    ],
    []
  );

  return (
    <div className="mt-12">
      <h2 className="font-bold text-2xl mb-4">Spojte se s námi</h2>
      <div className="w-full flex flex-row flex-break items-center justify-center gap-10 lg:gap-16 mt-4 mb-12 px-8">
        {socials.map((social) => (
          <a key={social.label} href={social.href} target="_blank">
            <div>
              <Image
                alt={social.label + " - Sázky DOBRÁ VĚC"}
                height={45}
                width={45}
                src={"/img/icons/" + social.icon}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
