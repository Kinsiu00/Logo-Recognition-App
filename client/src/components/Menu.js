import React, {Component} from 'react';

class Menu extends Component {
    constructor(props){
        super(props)

    }

    render(){

        return (
            <div>
                <h2 onClick={this.props.handleCompanies} >Member Company List</h2>
                <h2 onClick={this.props.handleCamera}>Logo Recognition [Alpha]</h2>
                <h2 onClick={this.props.handleAbout}>About</h2>
            </div>
        )
    }
}

export default Menu;