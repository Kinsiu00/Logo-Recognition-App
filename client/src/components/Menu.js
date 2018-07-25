import React, {Component} from 'react';

class Menu extends Component {
    constructor(props){
        super(props)

    }

    render(){

        return (
            <div>
                <h1>{this.props.view}</h1>
                <h2 onClick={this.props.viewCompanies} >Member Company List</h2>
                <h2>Logo Recognition [Alpha]</h2>
                <h2>About</h2>
            </div>
        )
    }
}

export default Menu;