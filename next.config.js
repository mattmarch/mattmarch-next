/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => [
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
  ],
};

module.exports = nextConfig;
