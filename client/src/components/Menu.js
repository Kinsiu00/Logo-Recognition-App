import React, {Component} from 'react';
class Menu extends Component {
    constructor(props){
        super(props)

    }

    render(){

        return (
<div>
 <nav>
     <div class="nav-wrapper">
       <ul class="row">
         <li class="col s3 center-align" onClick={this.props.handleHome}><i class="material-icons">home</i></li>
         <li class="col s3 center-align" onClick={this.props.handleCamera}><i class="material-icons">camera</i></li>
         <li class="col s3 center-align" onClick={this.props.handleCompanies}><i class="material-icons">view_list</i></li>
         <li class="col s3 center-align" onClick={this.props.handleAbout}><i class="material-icons">help_outline</i></li>

       </ul>
    </div>
   </nav>
    
            </div>
        )
    }
}

export default Menu;