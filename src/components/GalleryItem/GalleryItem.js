import React, { Component } from 'react';
import styles from '../GalleryItem/GalleryItem.module.css';

class GalleryItem extends Component {
  state = {
    isClicked: false,
  };

  clickImg = () => {
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

  addLike = (event) => {
    let id = this.props.item.id;
    console.log('adding likes', id);
    this.props.update(id);
  };

  render() {
    const { item, index } = this.props;
    let photoDisplay;
    const imageState = this.state.isClicked;
    if (imageState === true) {
      photoDisplay = (
        <div onClick={this.clickImg}>
          <div className={styles.overlayText}>
            <p className={styles.cursor}>{item.description}</p>
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
          <p>{item.likes} people like this.</p>
          <button id={this.props.index} onClick={this.addLike}>
            Like!
          </button>
        </div>
      </div>
    );
  }
}

export default GalleryItem;
