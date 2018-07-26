import React, {Component} from 'react';
import axios from 'axios';

class Submission extends Component {
    constructor(props){
        super(props);

    }
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
            <div>
                <form>
                    <button onClick={this.clicked}>send me</button>
                </form>
            </div>
        )
    }

}


export default Submission;