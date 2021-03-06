import CharacterCard from "./CharacterCard";
import React, { Component } from 'react';
import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
         word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
   }
   

export default class WordCard extends
Component{
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
        let guess = [this.state.guess]+c
        this.setState({guess})
        console.log(`${c} has been activated.`)
        if(guess.length === this.state.chars.length){
            if(guess === this.state.word){
                this.setState({guess: [], completed: true})
            }else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
            }
        }
    }
    render(){
        return(
            <div className="App">
                 {  
                     Array.from(this.state.chars).map((c, i) => 
                    <CharacterCard value = {c} key = {i} attempt={this.state.attempt}
                    activationHandler = {this.activationHandler}/>)
                 }
                  <p className="display">Round : {this.state.attempt}</p>
                  <p className="display">{this.state.completed? "YOU WIN" : this.state.attempt==1? "" :"Try Agian"}</p>
                  
             
            </div>
        )
    }
  
}