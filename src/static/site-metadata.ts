interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === "/" ? "" : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: "Lari Lari Lari",
  siteUrl: "https://instagram.com/zakiyys",
  logo: "https://raw.githubusercontent.com/zakiyys/zakiyys.github.io/refs/heads/master/logo%20miaw.png",
  description: "Personal site and blog",
  navLinks: [
    {
      name: "Summary",
      url: `${getBasePath()}/summary`,
    },
    {
      name: "Blog",
      url: "https://zakiyys.github.io/",
    },
    {
      name: "About",
      url: "https://zakiyys.github.io/",
    },
  ],
};

export default data;
