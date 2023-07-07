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
  i18n: {
    locales: ["en-GB"],
    defaultLocale: "en-GB",
  },
};

module.exports = nextConfig;
