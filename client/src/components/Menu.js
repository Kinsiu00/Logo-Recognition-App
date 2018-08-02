import React, {Component} from 'react';
class Menu extends Component {


    render(){
        return (
<div>
 <nav>
     <div style={{backgroundColor: 'black'}}className="nav-wrapper">
       <ul className="row">
         <li style={{fontSize: 28}}className="col s9 center-align" onClick={this.props.viewHome}>[logo] <span style={{color:'red'}}>//</span> Reader</li>
         <li style={{color: 'red'}}className="col s3 center-align" onClick={this.props.viewAbout}><i className="large material-icons">help_outline</i></li>

       </ul>
    </div>
   </nav>
    
            </div>
        )
    }
}

export default Menu;