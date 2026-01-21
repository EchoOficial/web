
import { FaAndroid, FaWindows, FaLinux, FaApple } from "react-icons/fa"

    // Download URLs for different platforms
const downloadUrls = {
    // android: process.env.NEXT_PUBLIC_NIGHTLY_DOWNLOAD_ANDROID_URL || '#',
    android: "https://play.google.com/store/apps/details?id=com.joaoalves.echo",
    windows: process.env.NEXT_PUBLIC_NIGHTLY_DOWNLOAD_WINDOWS_URL || '#',
    linux: process.env.NEXT_PUBLIC_NIGHTLY_DOWNLOAD_LINUX_URL || '#',
    macos: process.env.NEXT_PUBLIC_NIGHTLY_DOWNLOAD_MACOS_URL || '#'
}

// Platform configurations
export const platforms = [
    {
        name: 'Android',
        icon: FaAndroid,
        url: downloadUrls.android,
        color: 'success',
        chipColor: 'success',
        description: 'APK para Android',
        fileType: '.apk'
    },
    {
        name: 'Windows',
        icon: FaWindows,
        url: downloadUrls.windows,
        color: 'primary',
        chipColor: 'primary',
        description: 'Instalador para Windows',
        fileType: '.msi'
    },
    // {
    //     name: 'Linux',
    //     icon: FaLinux,
    //     url: downloadUrls.linux,
    //     color: 'warning',
    //     chipColor: 'warning',
    //     description: 'Package for Linux',
    //     fileType: '.deb'
    // },
    // {
    //     name: 'macOS',
    //     icon: FaApple,
    //     url: downloadUrls.macos,
    //     color: 'default',
    //     chipColor: 'default',
    //     description: 'Installer for macOS',
    //     fileType: '.dmg'
    // }
]