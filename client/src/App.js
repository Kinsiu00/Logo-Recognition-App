import React, { Component } from 'react';

import Menu from './components/Menu';

import Companies from './components/Companies'
import WebcamCapture from './components/Camera'


class App extends Component {

  state = {
    loading: true,
    companyList: [],
    apiResult: [],
    currentView: ''
  }

  componentWillMount = async () => {
    const response = await fetch('/companies')
    const json = await response.json()
      this.setState({loading: false, companyList: json.companies, currentView:'home'})
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
          <Menu handleHome={this.viewHome} 
                handleCompanies={this.viewCompanies} 
                handleCamera={this.viewCamera} 
                handleAbout={this.viewAbout}/>

        {/* HOME VIEW */}

        {
          view === 'home' &&
          <div>
          <h1>Welcome to Galvanize</h1>

          </div>
        }

        {/* COMPANY VIEW */}

        {
          view === 'companies' &&

          <ul class="collection">
          {
            companyList.map((company) => {
              return(
                
                <Companies 
                  currentcompany={company} 
                  setCurrentCompany={this.setCurrentCompany}
                />
                
              )
            })
          }
          </ul>
        }

        {/* LOGO RECOGNITION */}

        {
          view === 'camera' &&

          <div>
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
          view === 'result' &&


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

        {
          view === 'about' &&

          <div>
          <h4>Created by: <a href='https://www.linkedin.com/in/kin-siu/'>Kin Siu</a></h4>
          <h4>Check out the <a href='https://github.com/Kinsiu00/Spring-St-Logos'>code!</a></h4>
          </div>
        }



          </div>
    );
  }
}

export default App;
