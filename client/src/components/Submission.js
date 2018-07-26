import React, {Component} from 'react';
import axios from 'axios';

class Submission extends Component {
    constructor(props){
        super(props);

        this.state = {
            captured: false
        }
    }
    clicked = (e) => {
            e.preventDefault();
            this.state.captured=true;
            const image = this.props.imagine
            axios.post('/vision', {image}).then(
                (result) => {
                    this.props.setCurrentCompany(result.data)
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