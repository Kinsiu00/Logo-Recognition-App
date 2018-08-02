import React, {Component} from 'react';
import './Company.css'

class Companies extends Component {
    setCompany = (e) => {
        e.preventDefault()
        this.props.setCurrentCompany(this.props.currentcompany)
    }

    render(){
        const {name, image} = this.props.currentcompany;
        return(
            <li class="collection-item avatar">
            <img src={image} alt="" class="circle" onClick={this.setCompany}></img>
            <span class="title" onClick={this.setCompany}>{name}</span>
            </li>
        )
    }
}

export default Companies;