/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.externals = ['react-server-dom-webpack', ...config.externals];
        }
        return config;
    },
};

export default nextConfig;
