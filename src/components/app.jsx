import React, { Component } from 'react';
import FlatList from './flat_list';
import Map from './map';
import flats from '../data/flat';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
    };
  }

  render () {
    const { state } = this;
    return (
      <div>
        <FlatList flats={state.flats} />
        <Map />
      </div>
    );
  }
}

export default App;
