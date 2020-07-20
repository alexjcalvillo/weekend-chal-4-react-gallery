import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

class App extends Component {
  state = {
    items: [],
  };
  // when component loads to page run these
  componentDidMount() {
    console.log('Ready');
    this.getImages();
  }
  // GET Retrieve data from server to display on APP
  getImages = () => {
    Axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        // set state to the current array of gallery items
        this.setState({
          ...this.state.items,
          items: response.data,
        });
      })
      .catch((err) => {
        console.log(`Whoopsie doopsie that won't work, ${err}`);
      });
  };

  // PUT number of likes when individual item is clicked
  updateLikes = (id) => {
    console.log('PUT', id);
    Axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
      data: id,
    })
      .then((response) => {
        //call get again to retrieve updated DB
        this.getImages();
      })
      .catch((err) => {
        console.log(`You might want to recheck that: `, err);
      });
  };

  //POST new image with Form component
  postImage = (newImage) => {
    console.log('this is the image', newImage);
    Axios({
      method: 'POST',
      url: '/gallery',
      data: newImage,
    })
      .then((response) => {
        console.log('POST', response.data);
        this.getImages();
      })
      .catch((err) => {
        console.log(`It broke down on the way. ${err}`);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <div>
          <GalleryForm postImage={this.postImage} />
          <GalleryList
            group={this.state.items}
            updateLikes={this.updateLikes}
          />
          {/* <img src="images/goat_small.jpg" alt="a mountain goat" /> */}
        </div>
      </div>
    );
  }
}

export default App;
