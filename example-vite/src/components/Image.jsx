import React from 'react';
import PropTypes from 'prop-types';

const dynImg = (imgData, folder, type) => {
  let requestURI;
  if (folder) {
    requestURI = `${folder}/${imgData.root}.${type}`;
  } else {
    requestURI = `${imgData.root}.${type}`;
  }
  return new URL(`../../public/images/${requestURI}`, import.meta.url);
};

export const Image = ({ imgData, folder, type }) => {
  return (
    <img
      src={dynImg(imgData, folder, type)}
      width={imgData.width || 200}
      height={imgData.height || 200}
      alt={imgData.alt || ''}
    />
  );
};

export default Image;

Image.propTypes = {
  imgData: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  folder: PropTypes.string,
  type: PropTypes.string.isRequired
};
