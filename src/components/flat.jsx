import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceCurrency: "EUR",
    };
  }

  render() {
    const { state } = this;
    const { price, name, imgUrl } = this.props;
    const cardStyle = {
      backgroundImage: `url(${imgUrl})`
    };
    return (
      <div className="card" style={cardStyle}>
        <p className="card-price">{`${price} ${state.priceCurrency}`}</p>
        <h2 className="card-name">{name}</h2>
      </div>
    );
  }
}

// const Flat = () => {
//   return (
//     <div className="card">
//       <p></p>
//     </div>
//   )
// }

export default Flat;
