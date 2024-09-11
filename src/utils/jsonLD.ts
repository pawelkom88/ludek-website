import siteData from "../utils/siteData.json";
import { slugify } from "./helpers";

export default function jsonLDGenerator({
  type = 'website',
  post,
  url,
}: {
  type: string;
  post?: any;
  url?: string;
}) {
  if (type === "article") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.content}",
        "image": "https:${post.image.fields.file.url || "https://"}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "${slugify(post.author || "")}"
        },
        "datePublished": "${post.date}"
      }
    </script>`;
  }
  if (type === "website")
    return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
        "url": "${siteData.url}",
        "logo": "${siteData.url}/?????",
        "image": "${siteData.url}/?????",
        "description": "${siteData.description}",  
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bristol",
          "addressRegion": "Avon",
          "addressCountry": "United Kingdom",
          "postalCode": "${siteData.postalCode}",
          "addressCountryCode": "GB",
          "city": "${siteData.city}",
          "region": "${siteData.region}",
          "streetAddress": "${siteData.streetAddress}"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "${siteData.telephone}",
          "contactType": "customer support",
          "areaServed": "GB",
          "availableLanguage": "en-GB, pl-PL",
        }
      }
    </script>`;
}
