import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceCurrency: "EUR",
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUpdate() {
    console.log("updating");
  }

  handleClick = (e) => {
    const { selectFunction } = this.props;
    selectFunction(this.props);
    document.querySelectorAll('.card').forEach(flat => flat.classList.remove('active'));
    e.currentTarget.classList.add('active');
  }

  render() {
    const { state } = this;
    const { price, name, imgUrl } = this.props;
    const cardStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imgUrl})`
    };
    return (
      <div
        className="card"
        style={cardStyle}
        onClick={this.handleClick}
        role="button"
        aria-hidden="true"
        tabIndex="-1"
      >
        <p className="card-category">{`${price} ${state.priceCurrency}`}</p>
        <h2 className="card-description">{name}</h2>
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
