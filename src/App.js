import React, { Component } from 'react';
import WordCard from './Wordcard';
class App extends Component {
  
  render() {
    return (
      <div>
      {
        <WordCard value="HELLO"/>
      }
      </div>
    );
  }
}
export default App;


