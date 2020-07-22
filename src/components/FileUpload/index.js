import React, { Component } from 'react';
import * as firebase from 'firebase';
import { storage } from "../../firebase";
class FileUpload extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     uploadValue: 0,
  //     picture: null,
  //   };
  //   this.handleUpload = this.handleUpload.bind(this);
  // }

  handleUpload(event) {
    const file = event.target.files[0];
    const uploadTask = storage.ref(`/images/${file.name}`).put(file)


    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // let percentage =
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // this.setState({
        //   uploadValue: percentage,
        // });
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        storage.ref('images').child(file.name).getDownloadURL().then((url) => {
          console.log(url)
          // this.setState({
          //   picture: url,
          // });
        });
      }
    );
  }

  render() {
    return (
      <div>
        {/* <progress value={this.state.uploadValue} max="100"></progress>
        <br /> */}
        <input type="file" onChange={this.handleUpload} />
        {/* <br />
        <img width="320" src={this.state.picture} alt="xx" /> */}
      </div>
    );
  }
}

export default FileUpload;
