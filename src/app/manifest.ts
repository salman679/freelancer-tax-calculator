import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} - Bangladesh`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    shortcuts: [
      {
        name: "Open Calculator",
        short_name: "Calculator",
        description: "Estimate freelancer income tax in Bangladesh.",
        url: "/calculator",
        icons: [
          {
            src: "/icon.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
        ],
      },
      {
        name: "Read Tax Guides",
        short_name: "Guides",
        description: "Browse freelancer tax guides for Bangladesh.",
        url: "/blog",
        icons: [
          {
            src: "/icon.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
        ],
      },
    ],
    categories: ["finance", "business", "productivity"],
    lang: "en",
    dir: "ltr",
  };
}
