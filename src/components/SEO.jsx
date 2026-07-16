import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, keywords, image, url }) {
  const siteTitle = "GFG SRMIST";
  const siteTitleFull = "GeeksforGeeks Campus Body SRMIST";
  const defaultDescription =
    "Official website of the GeeksforGeeks Campus Body at SRMIST — fostering coding excellence, DSA skills, full-stack development, and placement readiness.";
  const defaultImage = "/assets/Logo/GfG Horizontal Combination Mark (Light Mode)@2x.png";
  const defaultUrl = "https://gfg-srmist.vercel.app/";
  const defaultKeywords =
    "GeeksforGeeks SRMIST, GFG SRMIST, coding club, DSA, full stack, IGNISIA, JAVA-VERSE, SRM, tech club, campus body";

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitleFull}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={url || defaultUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitleFull} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || defaultUrl} />
      <meta property="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitleFull} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}
