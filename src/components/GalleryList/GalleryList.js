import React, { Component } from 'react';
import styles from '../GalleryList/GalleryList.module.css';

class GalleryList extends Component {
  render() {
    const displayedGallery = this.props.group.map((image, index) => {
      return (
        <div className={styles.item} key={index}>
          <img src={image.path} alt={image.description}></img>
          <h4>{image.likes}</h4>
          <button>Like!</button>
        </div>
      );
    });
    return <div>{displayedGallery}</div>;
  }
}

export default GalleryList;
