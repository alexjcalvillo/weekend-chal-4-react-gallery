import React, { Component } from 'react';
import styles from '../GalleryForm/GalleryForm.module.css';

class GalleryForm extends Component {
  state = {
    form: {
      imageInput: '',
      descriptionInput: '',
    },
    galleryItem: [],
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    console.log('in submit');
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
          <input
            onChange={(event) => {
              this.handleInputChange(event, 'imageInput');
            }}
            type="text"
            placeholder="add image (/images/imagename.jpg)"
          />
          <input
            onChange={(event) => {
              this.handleInputChange(event, 'descriptionInput');
            }}
            type="text"
            placeholder="description of photo"
          />
          <button>Add Photo</button>
        </form>
      </div>
    );
  }
}

export default GalleryForm;
