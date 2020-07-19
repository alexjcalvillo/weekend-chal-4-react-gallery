import React, { Component } from 'react';
import styles from '../GalleryForm/GalleryForm.module.css';

class GalleryForm extends Component {
  state = {
    form: {
      imageInput: '',
      descriptionInput: '',
    },
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    console.log('in submit');
    const submittedImage = {
      path: this.state.form.imageInput,
      description: this.state.form.descriptionInput,
      likes: 0,
    };
    this.props.postImage(submittedImage);
    this.setState({
      form: {
        imageInput: '',
        descriptionInput: '',
      },
    });
  };

  handleInputChange(event, keyField) {
    this.setState(
      {
        form: {
          ...this.state.form,
          [keyField]: event.target.value,
        },
      },
      () => {
        console.log(this.state.form.imageInput);
        console.log(this.state.form.descriptionInput);
      }
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <label for="imageInput">Image URL:</label>
          <input
            id="imageInput"
            className={styles.stretchy}
            onChange={(event) => {
              this.handleInputChange(event, 'imageInput');
            }}
            type="text"
            placeholder="add image"
            value={this.state.form.imageInput}
          />
          <label for="descriptionInput">Description:</label>
          <input
            id="descriptionInput"
            className={styles.stretchy}
            onChange={(event) => {
              this.handleInputChange(event, 'descriptionInput');
            }}
            type="text"
            placeholder="description of photo"
            value={this.state.form.descriptionInput}
          />
          <button>Add Photo</button>
        </form>
      </div>
    );
  }
}

export default GalleryForm;
