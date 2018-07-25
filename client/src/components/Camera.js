import React, { Component } from 'react';
import Webcam from 'react-webcam';
import Submission from './Submission'

export default class WebcamCapture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      captured: false
    };
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
        image: imageSrc,
        captured: true
    })
  };

  render() {
    const videoConstraints = {
      width: 720,
      height: 1280,
      facingMode: 'user'
      // facingMode: {exact:'environment'},
      // NEEDS TESTING
    };

    return (
      <div>
        {!this.state.captured &&
        <div>
          <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
          />
          <button onClick={this.capture}>Capture photo</button>
        </div>
        }
        <div><img src={this.state.image} /></div>
        {this.state.captured &&
            <div>
                <Submission setCurrentCompany={this.props.setCurrentCompany} imagine={this.state.image}/>
            </div>
        }

      </div>
    );
  }
}