import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const { flats, selectFunction } = props;
  return (
    <div className="flat-list">
      {flats.map((flat) => {
        return (
          <Flat
            key={flat.id}
            price={flat.price}
            name={flat.name}
            imgUrl={flat.imageUrl}
            selectFunction={selectFunction}
            lat={flat.lat}
            lng={flat.lng}
          />
        );
      })}
    </div>
  );
};

export default FlatList;
