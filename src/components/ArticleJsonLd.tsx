import { JsonLd } from "@/components/JsonLd";
import {
  type BlogSlug,
  createArticleSchema,
  createBreadcrumbSchema,
  getBlogArticle,
} from "@/lib/seo";

type ArticleJsonLdProps = {
  slug: BlogSlug;
};

export function ArticleJsonLd({ slug }: ArticleJsonLdProps) {
  const article = getBlogArticle(slug);

  return (
    <>
      <JsonLd id={`${slug}-article-schema`} data={createArticleSchema(slug)} />
      <JsonLd
        id={`${slug}-breadcrumb-schema`}
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: article.title, path: `/blog/${article.slug}` },
        ])}
      />
    </>
  );
}
