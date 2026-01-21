"use client";

import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { TbDownload, TbChevronDown } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import Announcement from "../Announcement";

async function fetcher() {
  const res = await fetch(
    "https://api.github.com/repos/maxrave-dev/Echo/releases"
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

const HomeHeading = () => {
  const [version, setVersion] = useState("1.0");
  useEffect(() => {
    fetcher().then((data) => {
      setVersion(data[0].tag_name);
    });
  }, [version]);

  return (
    <div>
      <Announcement />
      <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl pb-8 bg-clip-text text-transparent bg-gradient-to-r from-gradientstart/60 to-50% to-gradientend/60">
        Um aplicativo de música simples que utiliza o YouTube Music como backend
      </h2>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight blink">
        Ouça suas músicas, vídeos, podcasts, rádios e muito mais favoritos do YouTube Music com o Echo gratuitamente.
      </h4>
      <div className="flex flex-col items-start gap-8 mt-8">
        {/* <a href="https://trendshift.io/repositories/13482" target="_blank" rel="noopener noreferrer">
          <img src="https://trendshift.io/api/badge/repositories/13482" alt="maxrave-dev%2FSimpMusic | Trendshift" style={{ width: "250px", height: "55px" }} width="250" height="55" />
        </a> */}
        <div className="flex items-center">
          {/* <Button
            color="primary"
            size="lg"
            radius="lg"
            endContent={<MdDownload />}
          >
            <Link href="/nightly-download">
              <p className="font-semibold">Download</p>
            </Link>
          </Button> */}
          <Dropdown placement="bottom">
            <DropdownTrigger>
                <Button
                    color="primary"
                    size="lg"
                    radius="lg"
                    // isDisabled={!isButtonEnabled}
                    startContent={<TbDownload className="text-xl" />}
                    endContent={<TbChevronDown className="text-xl" />}
                    // className={`${isButtonEnabled ? 'animate-pulse' : ''} font-semibold px-8`}
                    className={`font-semibold px-8`}
                >
                    Baixar agora
                    {/* {isButtonEnabled ? 'Download Now' : 'Please Wait...'} */}
                </Button>
            </DropdownTrigger>
            <DropdownMenu 
                aria-label="Download platforms"
                variant="flat"
                onAction={(key) => {
                    const platform = platforms.find(p => p.name.toLowerCase() === key)
                    if (platform && platform.url) {
                        window.open(platform.url, '_blank', 'noopener,noreferrer')
                    }
                }}
            >
                {platforms.map((platform) => {
                    const Icon = platform.icon
                    return (
                        <DropdownItem
                            key={platform.name.toLowerCase()}
                            startContent={<Icon className="text-xl" />}
                            description={platform.description}
                        >
                            {platform.name}
                        </DropdownItem>
                    )
                })}
            </DropdownMenu>
        </Dropdown>
          <p className="px-4 text-sm text-gray-500/80">
            Última versão: {version}
          </p>
        </div>
      </div>
      <p className="py-4 text-sm text-gray-500/80">
        Suporta dispositivos Android e Windows
      </p>
    </div>
  );
};

export default HomeHeading;
