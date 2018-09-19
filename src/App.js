import React, { Component } from 'react';
import WordCard from './Wordcard';
class App extends Component {
  render() {
    return (
      <div>
      {
        <WordCard value="hello"/>
      }
      </div>
    );
  }
}
export default App;


