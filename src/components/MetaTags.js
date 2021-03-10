import { Helmet } from "react-helmet";

const MetaTags = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta property="og:title" content={props.title} />
      <meta
        property="og:description"
        content={props.description}
      />
      <meta property="og:image" content={"https://nyolcag.hu" + props.img} />
      <meta property="og:url" content={window.location.origin} />
      <meta property="og:type" content="object" />
      <meta property="fb:app_id" content="1076431962839514" />
    </Helmet>
  );
};

export default MetaTags;
