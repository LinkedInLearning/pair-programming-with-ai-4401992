import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import styles from './Collection.module.css';

export const CollectionItem = ({ data }) => {
  return (
    <div data-full-img={data.dataFullImg}>
      <dt id={`name-${data.name}`}>{data.name}</dt>
      <dd className={styles.title}>{data.title}</dd>
      <dd className={styles.avatar}>
        <Image
          imgData={{
            root: data.avatar.root,
            width: data.avatar.width,
            height: data.avatar.height
          }}
          folder="characters"
          type="png"
          alt={data.avatar.alt}
        />
      </dd>
      <dd className={styles.desc}>{data.desc}</dd>
      <dd>
        <a href={data.button.href}>See bio and products</a>
      </dd>
    </div>
  );
};

export default CollectionItem;

CollectionItem.propTypes = {
  data: PropTypes.object.isRequired
};
