import "./globals.css";
import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";

const font = Titillium_Web({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sázky DOBRÁ VĚC",
  description: "Měníme hazard v investici!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
