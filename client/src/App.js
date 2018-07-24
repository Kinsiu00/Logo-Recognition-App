import React, { Component } from 'react';
import Company from './components/Company'
import WebcamCapture from './components/Camera'

class App extends Component {

  state = {
    companyList: [],
    apiResult: []
  }

  componentWillMount = async () => {
    const response = await fetch('/companies')
    const json = await response.json()
      this.setState({companyList: json.companies})
  }

  setCurrentCompany = (apiRes) => {
    this.setState({apiResult: apiRes})    
  }
  checkState = () => {
    console.log(this.state)
  }
  render() {
    let companyList = this.state.companyList
    return (
      <div>
        <WebcamCapture setCurrentCompany={this.setCurrentCompany}/>
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
        {/* {
          companyList.map(company => {
            return <Company key={company.id}cCompany={company}/>
          })
        } */}
        <button buttonResponse={this.checkState()}>click</button>
      </div>
    );
  }
}

export default App;
