import React, {Component} from 'react';
import './Company.css'

class Companies extends Component {
    setCompany = (e) => {
        e.preventDefault()
        this.props.setCurrentCompany(this.props.currentcompany)
    }

    render(){
        const {name} = this.props.currentcompany;
        return(
            <div>
                <p class='name' onClick={this.setCompany}>{name}</p>
                <p>-</p>
            </div>
        )
    }
}

export default Companies;