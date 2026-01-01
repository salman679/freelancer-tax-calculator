import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FreelancerTax.BD - Bangladesh Freelancer Tax Calculator",
    short_name: "FreelancerTax.BD",
    description:
      "Free tax calculator for Bangladesh freelancers. Calculate income tax for Fiverr, Upwork & freelance earnings instantly.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["finance", "business", "productivity"],
    lang: "en",
    dir: "ltr",
  };
}
