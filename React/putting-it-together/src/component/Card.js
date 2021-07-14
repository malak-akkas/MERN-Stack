import React, { Component } from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        count : this.props.age,
        };


    }

    countOne = () => {
        const {count} = this.state;
        return this.setState({count: count+1})
    }



    render() {
        return (
            <malak>
                <h1>{this.props.firstname}, {this.props.lastname}</h1>
            <p>Age: {this.state.count} </p>
            <p>Hair Color: {this.props.color}</p>

            <button onClick={this.countOne}>Birthday Button for {this.props.firstname}</button>

</malak>
        );
    }
}
export default Card;