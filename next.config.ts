import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: () =>
    Promise.resolve([
      // Redirects paths used in old Gatsby blog
      {
        source: "/new-website",
        destination: "/posts/gatsby-website",
        permanent: true,
      },
      {
        source: "/birthday-playlist",
        destination: "/posts/birthday-playlist",
        permanent: true,
      },
    ]),
};

export default nextConfig;
