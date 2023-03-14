import React from 'react';
import Helmet from 'react-helmet';

export const Head = () => {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <title>Big Star Collectibles</title>
      </Helmet>
    </>
  );
};

export default Head;
