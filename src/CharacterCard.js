import React, { Component } from 'react';
import './App.css';

export default class CharacterCard extends Component{
    render(){
        return (
            <div className="" >{
                this.props.value
            }</div>
        )
    }
}