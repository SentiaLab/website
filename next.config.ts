import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
    /**
     * Enable static exports for the App Router.
     *
     * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
     */
    output: isDevelopment ? undefined : "export",

    /**
     * Set base path. This is the slug of your GitHub repository.
     *
     * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
     */
    basePath: isDevelopment ? "" : "",

    /**
     * Set asset prefix for GitHub Pages
     */
    assetPrefix: isDevelopment ? "" : "",

    /**
     * Disable server-based image optimization. Next.js does not support
     * dynamic features with static exports.
     *
     * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
     */
    images: {
        unoptimized: true,
    },

    /**
     * Ensure trailing slash for static export
     */
    trailingSlash: true,
};

export default nextConfig;
