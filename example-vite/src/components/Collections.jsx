import React from 'react';
import data from '../../data/collections-data.json';
import Collection from './Collection';

export const Collections = () => {
  return (
    <>
      {data.collections.map((collection) => {
        return <Collection key={collection.name} data={collection}></Collection>;
      })}
    </>
  );
};

export default Collections;
