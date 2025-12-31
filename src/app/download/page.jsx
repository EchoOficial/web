import DownloadSection from "@/components/custom/DownloadSection";
import React from "react";

export const metadata = {
  title: "Download Echo",
  description: "Download Echo - Um aplicativo de música simples que utiliza o YouTube Music como backend",
  openGraph: {
    title: "Download Echo",
    description: "Download Echo - Um aplicativo de música simples que utiliza o YouTube Music como backend",
    images: [
      {
        url: "/images/blog/feature.jpg",
        width: 1200,
        height: 630,
        alt: "Echo - Feel free when playing music",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Echo",
    description: "Download Echo - Um aplicativo de música simples que utiliza o YouTube Music como backend",
    images: ["/images/blog/feature.jpg"],
  },
};

export default function Download() {
  return (
    <>
      <div className="lg:px-16 md:px-16 sm:px-10">
        <DownloadSection />
      </div>
    </>
  );
}
