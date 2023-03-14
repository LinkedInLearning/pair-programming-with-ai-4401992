import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from './CollectionItem';
import Image from './Image';
import styles from './Collection.module.css';

export const Collection = ({ data }) => {
  return (
    <section className={`${styles.collection} ${styles[data.className]}`}>
      <header>
        <Image
          imgData={{
            root: data.header.logo.root,
            width: data.header.logo.width,
            height: data.header.logo.height
          }}
          folder={null}
          type="svg"
          alt={data.header.logo.alt}
        />
        <h1>{data.header.title}</h1>
        <a
          href="{data.header.button.href}"
          className="button bordered grape"
          id="more-binaryville"
          aria-labelledby="more-binaryville name-binaryville">
          {data.header.button.href}{' '}
          <span className="arrow" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </header>
      <dl className={styles['char-list']}>
        {data.charList.map((character) => {
          return <CollectionItem key={character.name} data={character}></CollectionItem>;
        })}
      </dl>
    </section>
  );
};

Collection.propTypes = {
  data: PropTypes.object.isRequired
};

export default Collection;
