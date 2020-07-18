import React, { Component } from 'react';
import styles from '../GalleryItem/GalleryItem.module.css';

class GalleryItem extends Component {
  render() {
    const { item, index } = this.props;
    return (
      <div className={styles.item} key={index}>
        <img src={item.path} alt={item.description}></img>
        <h4>{item.likes}</h4>
        <button>Like!</button>
      </div>
    );
  }
}

export default GalleryItem;
