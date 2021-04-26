// next.config.js 
const path = require('path')
const withImages = require('next-images');
const Dotenv = require("dotenv-webpack");

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
    compress: true,
    webpack(config, { webpack }) {
        const prod = process.env.NODE_ENV === 'production';
        const plugins = [...config.plugins];
        // config.plugins.push(new Dotenv({ silent: true }));

        return {
            ...config,
            mode: prod ? 'production' : 'development',
            devtool: prod ? 'hidden-source-map' : 'eval',
            plugins,

        };
    },
});


module.exports = withImages({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    nextConfig
})