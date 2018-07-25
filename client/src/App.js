import React, { Component } from 'react';
import Menu from './components/Menu';

import Companies from './components/Companies'
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

  viewHome = () => {
    this.setState({currentView:'home'})
  }

  viewCompanies = () => {
    this.setState({currentView:'companies'})
  }

  viewCamera = () => {
    this.setState({currentView:'camera'})
  }

  viewAbout = () => {
    this.setState({currentView:'about'})
  }

  render() {
    let companyList = this.state.companyList
    return (
      <div>
        {/* HOME VIEW */}

        {
          this.state.currentView === 'home' &&
          <div>
          <h1>Welcome to Galvanize</h1>
          <h1>{this.state.currentView}</h1>
          <Menu handleHome={this.viewHome} 
                handleCompanies={this.viewCompanies} 
                handleCamera={this.viewCamera} 
                handleAbout={this.viewAbout}/>
          </div>
        }

        {/* COMPANY VIEW */}

        {
          this.state.currentView === 'companies' &&
            companyList.map((company) => {
              return(
                <div>
                <Companies cCompany={company}/>
                </div>
              )
            })
        }

        {/* LOGO RECOGNITION */}

        {
          this.state.currentView === 'camera' &&

          <div>
              <h1>{this.state.currentView}</h1>
            <WebcamCapture setCurrentCompany={this.setCurrentCompany}/>
          </div>
        }

        {/* ABOUT */}

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


          </div>
    );
  }
}

export default App;
