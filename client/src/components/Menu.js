import React, {Component} from 'react';
import {NavItem, Navbar, Icon} from 'react-materialize'

class Menu extends Component {
    constructor(props){
        super(props)

    }

    render(){

        return (

            <div>
                <Navbar draggable='true' class='blue' brand='NYC Directory' right>
                <NavItem onClick={this.props.handleHome}><Icon>home</Icon><p>home</p></NavItem>
                <NavItem onClick={this.props.handleCamera}><Icon>camera</Icon><p>camera</p></NavItem>
                <NavItem onClick={this.props.handleCompanies}><Icon>view_list</Icon><p>companies</p></NavItem>
                <NavItem onClick={this.props.handleAbout}><Icon>help_outline</Icon><p>about</p></NavItem>
                </Navbar>
            </div>
        )
    }
}

export default Menu;