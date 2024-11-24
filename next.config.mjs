import { withContentlayer } from "next-contentlayer2"

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.buymeacoffee.com',
                port: '',
                pathname: '/buttons/**/**',
            },
        ]
    }
};

export default withContentlayer(nextConfig);
