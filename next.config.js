const { prototype } = require("events");
const { hostname } = require("os");

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'spoonacular.com',
                port: '',
                pathname: '/recipeImages/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            }
        ],
    },
}
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
