import React, { Component } from 'react';
import Menu from './components/Menu';

import Company from './components/Company'
import WebcamCapture from './components/Camera'

class App extends Component {

  state = {
    companyList: [],
    apiResult: [],
    currentView: ''
  }

  componentWillMount = async () => {
    const response = await fetch('/companies')
    const json = await response.json()
      this.setState({companyList: json.companies, currentView:'home'})
  }

  setCurrentCompany = (apiRes) => {
    this.setState({apiResult: apiRes})    
  }

  render() {
    let companyList = this.state.companyList
    return (
      <div>
        {/* <WebcamCapture setCurrentCompany={this.setCurrentCompany}/> */}
        {
          this.state.apiResult &&

          this.state.apiResult.map(({name, description, image}) => {
            return (
              <div>
                <img src={image}></img>
                <h2>{name}</h2>
                <p>{description}</p>
              </div>
            )
          })

        }
        {
          this.state.currentView === 'home' &&
          <div>
          <h1>Welcome to Galvanize</h1>
          <Menu view={this.state.currentView}/>
          </div>
        }
          </div>
    );
  }
}

export default App;
