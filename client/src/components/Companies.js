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
            <li class="collection-item avatar" onClick={this.setCompany}>
            <img src={image} alt="" class="circle"></img>
            <span class="title">{name}</span>
            </li>
        )
    }
}

export default Companies;