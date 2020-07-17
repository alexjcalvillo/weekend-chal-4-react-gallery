import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    console.log('Ready');
    this.getImages();
  }
  // Retrieve data from server to display on APP
  getImages() {
    Axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        this.setState({
          ...this.state.items,
          items: response.data,
        });
      })
      .catch((err) => {
        console.log(`Whoopsie doopsie that won't work, ${err}`);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <div>
          <GalleryList group={this.state.items} />
          {/* <img src="images/goat_small.jpg" alt="a mountain goat" /> */}
        </div>
      </div>
    );
  }
}

export default App;
