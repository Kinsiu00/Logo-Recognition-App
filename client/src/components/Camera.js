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
      margin: "auto",
      width: 250,
      height: 250,
      facingMode: 'environment' || 'user'
      // facingMode: {exact:'environment'},
      // OPERATIONAL, NEEDS FURTHER TESTING
    };


    return (
      <div class='container'>
      <h4>Welcome!</h4>
      <p>Snap a photo of any logo to learn more about our Galvanize Workspace!</p>
        {!this.state.captured &&
        <div style={{marginLeft: 50}}>
          <Webcam
          audio={false}
          height={250}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={250}
          videoConstraints={videoConstraints}/>
          <div class='row'>
            <a style={{marginRight:2}}class="col s5 btn-large">TAKE PHOTO</a>
            <a style={{marginLeft:2}}class="col s5 btn-large orange" onClick={this.props.viewCompanies}>BROWSE</a>
          {/* <button class='col s4 offset-s4' onClick={this.capture}>Capture photo</button> */}
          </div>        
        </div>
        }
        <div><img src={this.state.image} alt='' /></div>
        {this.state.captured &&
            <div>
                <Submission setCurrentCompany={this.props.setCurrentCompany} imagine={this.state.image}/>
            </div>
        }

      </div>
    );
  }
}