import React from "react";
import Main from "../components/Main/Main.js";
import { Helmet } from "react-helmet";

const Home = ({ theme, setTheme }) => {
  return (
    <>
      <Helmet>
        <title>Santiago Guáqueta</title>
        <meta name="twitter:card" content="santiago_guaqueta" />
        <meta name="twitter:site" content="@santigeek" />
        <meta name="twitter:creator" content="@santigeek" />
        <meta name="twitter:title" content="Santiago Guáqueta" />
        <meta name="twitter:description" content="Santiago Guáqueta" />
        <meta
          name="twitter:image"
          content="https://santigeek.com/static/media/img-santigeek.7e8647b4.png"
        />
        <meta property="og:title" content="Santiago Guáqueta" />
        <meta property="og:description" content="Santiago Guáqueta Portfolio" />
        <meta
          property="og:image"
          content="https://santigeek.com/static/media/img-santigeek.7e8647b4.png"
        />
        <meta property="og:url" content="santigeek.com" />
        <meta property="og:site_name" content="Santiago Guáqueta Portfolio" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="portfolio" />
        <meta property="fb:app_id" content="santiago.guaquetaangarita" />
      </Helmet>
      <Main theme={theme} setTheme={setTheme} />
    </>
  );
};

export default Home;
