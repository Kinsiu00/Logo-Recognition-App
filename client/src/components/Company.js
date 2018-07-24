import React, {Component} from 'react';
import './Company.css'

class Company extends Component {
    render(){
        const {name, image} = this.props.cCompany;
        return(
            <div>
                <p class='name'>{name}</p>
                <img class='logo' src={image}>
                </img>
            </div>
        )
    }
}

export default Company;