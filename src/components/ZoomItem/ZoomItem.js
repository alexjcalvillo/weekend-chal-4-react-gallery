import React, { Component } from 'react';
import styles from '../GalleryList/GalleryList.module.css';
import GalleryItem from '../GalleryItem/GalleryItem';

class ZoomItem extends Component {
  render() {
    const displayedGallery = this.props.group.map((image, index) => {
      return (
        <GalleryItem item={image} key={index} update={this.props.updateLikes} />
      );
    });
    return <div className={styles.field}>{displayedGallery}</div>;
  }
}

export default ZoomItem;
