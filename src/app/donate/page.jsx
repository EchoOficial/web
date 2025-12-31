import DonateSection from "@/components/custom/DonateSection";
import React from "react";

export const metadata = {
  title: "Doe para o Echo",
  description: "Apoie o desenvolvimento do Echo - um aplicativo de música simples que usa o YouTube Music como plataforma.",
  openGraph: {
    title: "Doe para o Echo",
    description: "Apoie o desenvolvimento do Echo - um aplicativo de música simples que usa o YouTube Music como plataforma.",
    images: [
      {
        url: "/images/blog/feature.jpg",
        width: 1200,
        height: 630,
        alt: "Echo - Sinta-se à vontade ao tocar música.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doe para o Echo",
    description: "Apoie o desenvolvimento do Echo - um aplicativo de música simples que usa o YouTube Music como plataforma.",
    images: ["/images/blog/feature.jpg"],
  },
};

const Donate = () => {
  return (
    <div className="lg:px-16 md:px-16 sm:px-10">
      <DonateSection />
    </div>
  );
};

export default Donate;
