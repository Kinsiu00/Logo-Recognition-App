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

  setCurrentCompany = (result) => {
    this.setState({apiResult: result,
                    currentView:'result'})    
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
    let view = this.state.currentView
    let result = this.state.apiResult
    return (
      <div>
        {/* HOME VIEW */}

        {
          view === 'home' &&
          <div>
          <h1>Welcome to Galvanize</h1>
          <h1>{view}</h1>
          <Menu handleHome={this.viewHome} 
                handleCompanies={this.viewCompanies} 
                handleCamera={this.viewCamera} 
                handleAbout={this.viewAbout}/>
          </div>
        }

        {/* COMPANY VIEW */}

        {
          view === 'companies' &&
            companyList.map((company) => {
              return(
                <div>
                <Companies 
                  currentcompany={company} 
                  setCurrentCompany={this.setCurrentCompany}
                />
                </div>
              )
            })
        }

        {/* LOGO RECOGNITION */}

        {
          view === 'camera' &&

          <div>
              <h1>{view}</h1>
            <WebcamCapture setCurrentCompany={this.setCurrentCompany}/>
                  {/* {
                    result &&
          
                    result.map(({name, description, image}) => {
                      return (
                        <div>
                          <img src={image}></img>
                          <h2>{name}</h2>
                          <p>{description}</p>
                        </div>
                      )
                    })
                  } */}
                            </div>

        }

        {/* RESULTS */}

        {
          result &&


              <div>
                <img src={result.image}></img>
                <h2>{result.name}</h2>
                <p>{result.description}</p>
                {result.website && <a href={result.website}><img src='./img/www.png' alt='company website'></img></a>}
                {result.facebook && <a href={result.facebook}><img src='./img/facebook.png' alt='facebook'></img></a>}
                {result.twitter && <a href={result.twitter}><img src='./img/twitter.png' alt='twitter'></img></a>}
                {result.linkedin && <a href={result.linkedin}><img src='./img/linkedin.png' alt='linkedin'></img></a>}
                </div>

        }


        {/* ABOUT */}




          </div>
    );
  }
}

export default App;
