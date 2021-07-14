import React, { Component } from 'react';

class PersonCard extends React.Component {
    render() {
        return (
            <malak>
                <h1>{this.props.firstname}, {this.props.lastname}</h1>
            <p>Age: {this.props.age} </p>
            <p>Hair Color: {this.props.color}</p>
            </malak>
        );
    }
}
export default PersonCard;