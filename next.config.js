/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    workboxOptions: {
        disableDevLogs: true,
    },
    // ... other options you like
});

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
        ],
    },
};

module.exports = withPWA(nextConfig);
