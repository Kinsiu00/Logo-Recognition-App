import React, { Component } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios'

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
  
  retake = () => {
    this.setState({
      captured: false
    })
  }
  sendIt = (e) => {
    e.preventDefault();
    const image = this.state.image
    axios.post('/vision', {image}).then(
        (result) => {
            this.props.setCurrentCompany(result.data[0])
        })
  }

  render() {
    const videoConstraints = {
      margin: "auto",
      width: 480,
      height: 480,
      facingMode: 'environment' || 'user'

    };


    return (
      <div className='container'>
      <h4>Welcome!</h4>
      <p>Snap a photo of any logo to learn more about our Galvanize Workspace!</p>
        
        {/* WEBCAM */}

        {!this.state.captured &&
        <div style={{marginLeft: 50}}>
          <Webcam
          audio={false}
          height={250}
          ref={this.setRef}
          onUserMedia={this.handleUserMedia}
          screenshotFormat="image/jpeg"
          width={250}
          videoConstraints={videoConstraints}/>
          <div className='row'>
            <a style={{marginRight:2}}className="col s5 btn-large" onClick={this.capture}>TAKE PHOTO</a>
            <a style={{marginLeft:2}}className="col s5 btn-large orange" onClick={this.props.viewCompanies}>BROWSE</a>
          </div>        
        </div>
        }

        {/* PHOTO */}

       {this.state.captured &&
        <div style={{marginLeft: 50}}>
          <div><img src={this.state.image} alt='' /></div>
          <div className='row'>
            <a style={{marginRight:2}}className="col s5 btn-large" onClick={this.sendIt}>FIND ME</a>
            <a style={{marginLeft:2}}className="col s5 btn-large orange" onClick={this.retake}>RETAKE</a>
          </div>     
        </div>
        }

      </div>
    );
  }
}