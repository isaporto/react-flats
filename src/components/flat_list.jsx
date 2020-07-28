import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const { flats } = props;
  return (
    <div className="flat-list">
      {flats.map((flat) => {
        return (
          <Flat
            key={flat.id}
            price={flat.price}
            name={flat.name}
            imgUrl={flat.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default FlatList;
