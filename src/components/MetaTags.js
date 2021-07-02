import React from "react";
import { Helmet } from "react-helmet";

const MetaTags = (props) => {
  const baseUrl = "https://nyolcag.hu";
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: props.title.toString(),
    url: window.location.origin.toString(),
    description: props.description.toString(),
    image: props.imageFlag ? props.img : baseUrl + props.img,
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{props.title}</title>
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.imageFlag ? props.img : baseUrl + props.img} />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:type" content="object" />
        <meta property="fb:app_id" content="1076431962839514" />
      </Helmet>
      <Helmet encodeSpecialCharacters={false}>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
    </React.Fragment>
  );
};

export default MetaTags;
