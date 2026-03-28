const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  ...(isDev
    ? {}
    : {
        output: "export",
        trailingSlash: true,
      }),
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
