'use client'

import { useState, useEffect } from 'react'
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react"
import { TbDownload, TbChevronDown } from "react-icons/tb"
import { platforms } from '@/utils/platforms'

export default function NightlyDownload() {
    const [countdown, setCountdown] = useState(10)
    const [isButtonEnabled, setIsButtonEnabled] = useState(false)
    
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    // Enable button after countdown
                    setIsButtonEnabled(true)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="download-section">
            <div className="relative isolate px-6 py-20 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80e6ff] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    ></div>
                </div>
                <div className="mx-auto max-w-2xl text-center py-32 sm:py-48 lg:py-56">
                    <div className="mb-8">
                        {/* Title */}
                        <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl pb-4 bg-clip-text text-transparent bg-gradient-to-r from-gradientstart/60 to-50% to-gradientend/60">
                            Echo
                        </h2>
                    </div>


                    {/* Status Text */}
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        Pronto para baixar!
                    </p>

                    {/* Download Button with Dropdown */}
                    <div className="mb-8">
                        {/* <Dropdown placement="bottom" isDisabled={!isButtonEnabled}> */}
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
                    </div>

                    {/* Security Notice */}
                    <p className="text-sm text-gray-500/80">
                        🔒 Este é um download seguro do Echo
                    </p>
                </div>
            </div>
        </section>
    )
}
