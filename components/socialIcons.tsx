import { useMemo } from "react";

const SocialIcons = () => {
  const socials = useMemo(
    () => [
      {
        icon: "SDV_TELEGRAM.png",
        label: "Email",
        href: "/",
      },
      {
        icon: "SDV_TELEGRAM.png",
        label: "Instagram",
        href: "/",
      },
      {
        icon: "SDV_TELEGRAM.png",
        label: "Telegram",
        href: "/",
      },
    ],
    []
  );

  return (
    <div className="mt-12">
      <h2 className="font-bold text-2xl">Spojte se s námi</h2>
      <div className="w-full flex flex-row items-center justify-center gap-12 mt-4">
        {socials.map((social) => (
          <a key={social.label} href={social.href} target="_blank">
            <div>
              <img src={"/img/" + social.icon} width="75px" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
