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
    if(result === 'e'){
      this.setState({currentView:'error'})
    }
    else{ 
      this.setState({apiResult: result,
                    currentView:'result'})
    }
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
          <Menu viewHome={this.viewHome} 
                viewAbout={this.viewAbout}/>

        {/* HOME VIEW */}

        {
          view === 'home' &&
          <div className='container'>
          <h4>Welcome!</h4>
          <p>Snap a photo of any logo to learn more about our Galvanize Workspace!</p>
          <div className='row'>
          <img className='col s8 offset-s2' src='./img/galvanize.png' alt='Galvanize Logo'></img>
          </div>
          <div className='row'>
          <a style={{marginRight:2}}className="col s5 offset-s1 btn-large" onClick={this.viewCamera}>TAKE PHOTO</a>
          <a style={{marginLeft:2}}className="col s5 btn-large orange" onClick={this.viewCompanies}>BROWSE</a>
          </div>
          </div>
        }

        {/* COMPANY VIEW */}

        {view === 'companies' &&

          <ul className="collection">
          {
            companyList.map((company) => {
              return(  
                <Companies 
                  currentcompany={company}
                  setCurrentCompany={this.setCurrentCompany}/>
              )
            })
          }
          </ul>
        }

        {/* LOGO RECOGNITION */}

        {view === 'camera' &&

          <div>
            <WebcamCapture 
            setCurrentCompany={this.setCurrentCompany}
            viewCompanies={this.viewCompanies}/>
          </div>
        }

        {/* RESULTS */}

        {view === 'result' &&

              <div class='container'>
                <div class='row'>
                <br/>
                  <img class= 'col s8 offset-s2'src={result.image} alt='result logo'></img>
                  <div class='row'>
                  <h4 class='col s12'>{result.name}</h4>
                </div>
                <p>{result.description}</p>
                <footer class='row'>
                  {result.website && <a class='col s3 center-align' href={result.website}><img src='./img/www.png' alt='company website'></img></a>}
                  {result.facebook && <a class='col s3 center-align' href={result.facebook}><img src='./img/facebook.png' alt='facebook'></img></a>}
                  {result.twitter && <a class='col s3 center-align' href={result.twitter}><img src='./img/twitter.png' alt='twitter'></img></a>}
                  {result.linkedin && <a class='col s3 center-align' href={result.linkedin}><img src='./img/linkedin.png' alt='linkedin'></img></a>}
                </footer>
                </div>  
              </div>

        }


        {/* ABOUT */}

        {view === 'about' &&

          <div class='container'>
          <div class='row'>
            <img class= 'col s8 offset-s2'src='./img/profile.jpg' alt='profile'></img>
          <div class='row'>
            <h4 class='col s12'>[logo] <span style={{color:'red'}}>//</span> Reader</h4>
          </div>
         <p>A gStudent Project by Kin Siu.</p>
          <p>A Mobile image-recognition application for the Galvanize NYC campus. Uses Google Vision API to identify Galvanize member companies 
            based on images of their logos and text.
          </p>
          <footer class='row'>
            <a class='col s3 offset-s3' href='https://github.com/Kinsiu00/Spring-St-Logos'><img src='./img/github.png' alt='github'></img></a>
            <a class='col s3' href='https://www.linkedin.com/in/kin-siu/'><img src='./img/linkedin.png' alt='linkedin'></img></a>
          </footer>
          </div>  
        </div>
        }

        {/* ERROR */}

        {
          view === 'error' &&

          <div className='container'>
          <div className='row'>
          <h4 class='col s8 offset-s4'>uh-oh!</h4>
          </div>
          <div className='row'>
          <img className='col s8 offset-s2' src='./img/sadKitty.jpeg' alt='Sad Kitten'></img>
          </div>
          <p>Sorry! It seems something went wrong, please try again. If you do not find your company
            on the list, please contact the administrator.
          </p>
          <div className='row'>
          <a style={{marginRight:2}}className="col s5 offset-s1 btn-large" onClick={this.viewCamera}>TRY AGAIN</a>
          <a style={{marginLeft:2}}className="col s5 btn-large orange" onClick={this.viewCompanies}>BROWSE</a>
          </div>
          </div>
        }



          </div>
    );
  }
}

export default App;
