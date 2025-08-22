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
      url: "https://github.com/yihong0618/gitblog",
    },
    {
      name: "About",
      url: "https://github.com/yihong0618/running_page/blob/master/README-CN.md",
    },
  ],
};

export default data;
