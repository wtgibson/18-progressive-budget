import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import Card from './components/Card/Card';
import images from "./images.json";

class App extends Component {
  // Setting state
  state = {
    images,
    score: 0,
    highScores: 0,
    clicked: [],
    text: "Take a Guess!"
  };

  render() {
    return (
      <div className="bg-light">
        <Navbar 
          text={this.state.text}
          score={this.state.score}
          highScore={this.state.highScore} />
        <div className="jumbotron text-center bg-light">
          <h1>Puppy Clicky Game</h1>
          <p> Click on each image once and only once to win the game!</p>
          <Wrapper>
            {this.state.images.map(image => (
              <Card
                id={image.id}
                key={image.id}
                image={image.image}
                clickMe={this.clickMe}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    )
  };
};

export default App;
