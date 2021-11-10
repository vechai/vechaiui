const baseUrl = "https://github.com/vechai/vechaiui";

const siteConfig = {
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/docs`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  seo: {
    title: "React Tailwind CSS Components.",
    titleTemplate: "%s - Vechai UI",
    description:
      "Collection of Accessible React UI Components using TailwindCSS.",
    siteUrl: "https://vechaiui.com",
    twitter: {
      handle: "@vechaiui",
      site: "@vechaiui",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://vechaiui.com",
      title: "Vechai UI - Tailwind CSS Components",
      description:
        "Collection of Accessible React UI Components using TailwindCSS.",
      site_name:
        "Vechai UI: Collection of Accessible React UI Components using TailwindCSS.",
      images: [
        {
          url: "https://vechaiui.com/og-image.png",
          width: 1200,
          height: 627,
          alt:
            "Vechai UI: Collection of Accessible React UI Components using TailwindCSS.",
        },
        {
          url: "https://vechaiui.com/twitter-og-image.png",
          width: 1012,
          height: 506,
          alt:
            "Vechai UI: Collection of Accessible React UI Components using TailwindCSS.",
        },
      ],
    },
  },
};

export default siteConfig;
