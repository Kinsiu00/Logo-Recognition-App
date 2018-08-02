import React, {Component} from 'react';
import axios from 'axios';

class Submission extends Component {

    clicked = (e) => {
            e.preventDefault();
            const image = this.props.imagine
            axios.post('/vision', {image}).then(
                (result) => {
                    this.props.setCurrentCompany(result.data[0])
                })
    }

    render(){
        return(
            <button onClick={this.clicked}>send me</button>

        )
    }

}


export default Submission;