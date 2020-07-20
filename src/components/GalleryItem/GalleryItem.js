import React, { Component } from 'react';
import styles from '../GalleryItem/GalleryItem.module.css';
import Modal from '../Modal/Modal';

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

  zoomIn = () => {
    console.log('in zoom', this.state.zoomedIn);
    this.setState({
      zoomedIn: !this.state.zoomedIn,
    });
  };

  render() {
    const { item, index } = this.props;

    let photoDisplay = (
      <div onClick={this.clickImg}>
        <img className={styles.noblur} src={item.path} alt={item.description} />
      </div>
    );
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
    }

    return (
      <div className={styles.item} key={index}>
        <Modal
          pic={item.path}
          description={item.description}
          className={styles.zoom}
        />
        {photoDisplay}
        <div>
          <hr />
          <p>{item.likes} people like this.</p>
          <button onClick={this.addLike}>Like!</button>
        </div>
      </div>
    );
  }
}

export default GalleryItem;
