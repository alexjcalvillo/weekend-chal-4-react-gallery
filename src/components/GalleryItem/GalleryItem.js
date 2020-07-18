import React, { Component } from 'react';
import styles from '../GalleryItem/GalleryItem.module.css';

class GalleryItem extends Component {
  state = {
    isClicked: false,
  };

  clickImg = (event) => {
    console.log('in clickImg');
    this.setState(
      {
        isClicked: !this.state.isClicked,
      },
      () => {
        console.log(this.state.isClicked);
      }
    );
  };

  render() {
    const { item, index } = this.props;
    let photoDisplay;
    const imageState = this.state.isClicked;
    if (imageState === true) {
      photoDisplay = (
        <div onClick={this.clickImg}>
          <div className={styles.overlayText}>
            <p>{item.description}</p>
          </div>
          <img className={styles.blur} src={item.path} alt={item.description} />
        </div>
      );
    } else {
      photoDisplay = (
        <div onClick={this.clickImg}>
          <img
            className={styles.noblur}
            src={item.path}
            alt={item.description}
          />
        </div>
      );
    }

    return (
      <div className={styles.item} key={index}>
        {photoDisplay}
        <div>
          <hr />
          <h4>{item.likes}</h4>
          <button>Like!</button>
        </div>
      </div>
    );
  }
}

export default GalleryItem;
