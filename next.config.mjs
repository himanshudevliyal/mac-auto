/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com", port: "" },
      { protocol: "https", hostname: "api.macautoindia.com", port: "" },
      { protocol: "https", hostname: "api.mack-ev.com", port: "" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/shop",
        destination: "https://mack-ev.com/shop",
        permanent: true,
      },
      {
        source: "/e-loader-jaunpur",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },

      // {
      //   source: "/e-tricycle-meerut",
      //   destination: "/",
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
