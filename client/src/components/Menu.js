import React, {Component} from 'react';
class Menu extends Component {


    render(){
        return (
<div className='navbar-fixed'>
 <nav>
     <div style={{backgroundColor: 'black'}}className="nav-wrapper">
       <ul className="row">
         <li className='col s1 ' onClick={this.props.viewHome}><span><img src='./img/logoReader.png' alt='[logo] // Reader'></img></span></li>
         <li style={{color: 'magenta'}}className="col s2 offset-s9 center-align" onClick={this.props.viewAbout}><i className="large material-icons">help_outline</i></li>
       </ul>
    </div>
   </nav>
    
            </div>
        )
    }
}

export default Menu;