/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.youtube.com", "api.macautoindia.com", "api.mack-ev.com"],
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
