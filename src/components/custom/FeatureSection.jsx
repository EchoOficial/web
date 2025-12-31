import React from "react";
import { MdLibraryMusic, MdLyrics, MdFeaturedPlayList } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { TbAnalyze } from "react-icons/tb";
import { IoCloudOffline } from "react-icons/io5";
import { Card, CardBody, CardHeader, CardTitle } from "@nextui-org/react";
const features = [
  {
    title: "Streaming de Música",
    descriptions:
      "Reproduza músicas do YouTube Music ou do YouTube gratuitamente, sem anúncios, em segundo plano",
    image: MdLibraryMusic,
  },
  {
    title: "Navegação Rápida",
    descriptions:
      "Navegação em Home, Charts, Podcast, Moods & Genre com dados do YouTube Music em alta velocidade",
    image: FaSearch,
  },
  {
    title: "Personalização de Dados",
    descriptions:
      "Analise seus dados de reprodução, crie playlists personalizadas e sincronize com o YouTube Music",
    image: TbAnalyze,
  },
  {
    title: "Reprodução Offline",
    descriptions: "Armazenamento em cache e salvamento de dados para reprodução offline",
    image: IoCloudOffline,
  },
  {
    title: "Letra Sincronizada",
    descriptions:
      "Letras sincronizadas do Musixmatch e do YouTube Transcript e letras traduzidas do Musixmatch",
    image: MdLyrics,
  },
  {
    title: "Muitas outras funcionalidades",
    descriptions:
      " Muitas outras funcionalidades como SponsorBlock, Sleep Timer, Android Auto, Video Option, etc",
    image: MdFeaturedPlayList,
  },
];
const FeatureSection = () => {
  return (
    <div className="py-4">
      <h1 className="text-center scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl bg-clip-text py-10 text-transparent bg-gradient-to-r from-gradientstart/60 to-50% to-gradientend/60">
        Funcionalidades
      </h1>
      <div className="grid grid-cols-1 mx-14 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-start">
        {features.map((feature, index) => (
          <Card
            key={index}
            isBlurred
            className="text-center justify-self-stretch py-7 hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <CardHeader className="flex justify-center">
              <feature.image className="py-2" size={42} />
            </CardHeader>
            <CardBody>
              <h1 className="text-center text-2xl font-bold tracking-tight lg:text-3xl bg-clip-text py-2 text-transparent bg-gradient-to-r from-gradientstart/60 to-50% to-gradientend/60">
                {feature.title}
              </h1>
            </CardBody>
            <CardBody className="lg:px-24 md:px-12 px-10 py-2">
              <p className="text-center">{feature.descriptions}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
