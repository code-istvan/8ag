import React from "react";
import { Helmet } from "react-helmet";

const MetaTags = (props) => {
  baseUrl = "https://nyolcag.hu";
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: props.title.toString(),
    url: window.location.origin.toString(),
    description: props.description.body.toString(),
    image: baseUrl + props.img,
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{props.title}</title>
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={baseUrl + props.img} />
        <meta property="og:url" content={window.location.origin} />
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
