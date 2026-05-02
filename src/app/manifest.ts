import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Freelancer Tax Calculator - Bangladesh",
    short_name: "Freelancer Tax",
    description:
      "Bangladesh-focused freelancer tax calculator and guide. Estimate income tax for freelance earnings.",
    start_url: "/",
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
    categories: ["finance", "business", "productivity"],
    lang: "en",
    dir: "ltr",
  };
}
