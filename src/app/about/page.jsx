import AboutSection from "@/components/custom/AboutSection";
import React from "react";

export const metadata = {
  title: "About Echo",
  description: "Learn more about Echo - Um aplicativo de música simples que utiliza o YouTube Music como backend",
  openGraph: {
    title: "About Echo",
    description: "Learn more about Echo - Um aplicativo de música simples que utiliza o YouTube Music como backend",
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
    title: "About Echo",
    description: "Learn more about Echo - Um aplicativo de música simples que utiliza o YouTube Music como backend",
    images: ["/images/blog/feature.jpg"],
  },
};

const About = () => {
  return (
    <div className="lg:px-16 md:px-16 sm:px-10">
      <AboutSection />
    </div>
  );
};

export default About;
