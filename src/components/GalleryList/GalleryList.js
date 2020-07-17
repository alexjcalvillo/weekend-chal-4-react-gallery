import React, { Component } from 'react';
import styles from '../GalleryList/GalleryList.module.css';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    // const displayedGallery = this.props.group.map((image, index) => {
    //   return (
    //     <div className={styles.item} key={index}>
    //       <img src={image.path} alt={image.description}></img>
    //       <h4>{image.likes}</h4>
    //       <button>Like!</button>
    //     </div>
    //   );
    // });
    return (
      <div>
        <GalleryItem image={this.props.items} />
      </div>
    );
  }
}

export default GalleryList;
