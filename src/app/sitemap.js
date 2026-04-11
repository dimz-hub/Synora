export default function sitemap() {
  const baseUrl = "https://careviasolutions.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/career`, lastModified: new Date() },
    { url: `${baseUrl}/ourservices`, lastModified: new Date() },
  ];
}