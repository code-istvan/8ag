import { Helmet } from "react-helmet";

const MetaTags = () => {
  return (
    <Helmet>
      <meta property="og:title" content="Főoldal- Nyolcág" />
      <meta
        property="og:description"
        content="Nyolcágú Jóga Alapítvány honlapja Az Alapítvány célja, hogy a jóga elméletét és gyakorlatát minél szélesebb körben és folyamatosan népszerűsítse Magyarországon. Az Indiából eredeztethető jóga már évezredek óta segíti az embereket a testi és lelki egészség elérésében és megőrzésében. "
      />
      <meta property="og:image" content={"https://nyolcag.hu" + img} />
      <meta property="og:url" content={window.location.origin} />
      <meta property="og:type" content="object" />
      <meta property="fb:app_id" content="1076431962839514" />
    </Helmet>
  );
};

export default MetaTags;
