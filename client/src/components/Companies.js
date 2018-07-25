import React, {Component} from 'react';
import './Company.css'

class Companies extends Component {
    render(){
        const {name, image} = this.props.cCompany;
        return(
            <div>
                <p class='name'>{name}</p>
            </div>
        )
    }
}

export default Companies;