import React, { Component } from 'react';
import Title from './components/Title';
import Date from './components/Date';
import Comment from './components/Comment';
import Images from './components/Images';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
          <Date />
          <Comment />
          <Images />
      </div>


    );
  }
}

export default App;
