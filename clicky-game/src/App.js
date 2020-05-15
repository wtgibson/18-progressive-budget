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
    text: "Pick a Puppy!"
  };

  // Function that determines whether picture was cicked before
  clickMe = id => {
    // If clicked id is in state, user loses 
    if(this.state.clicked.includes(id)) {
      this.setState({text:"You picked the same puppy :("})
      // If high score is less than current score, set high score state as current score
      if(this.state.highScore < this.state.score){
        this.setState({highScore: this.state.score})
      };
      this.setState({clicked: []})
      this.setState({score: 0})
    }

    // If clicked id is not in state, user continues to play
    // Score in state increases
    // Clicked id is set into clicked array in state

    else{
      this.setState({text: "You picked a new puppy!"})
      this.setState({score: this.state.score + 1})
      this.setState({clicked: [...this.state.clicked, id]})
    };

    const newClicked = this.state.images
    this.shuffleImages(newClicked)
  };
  
  // Shuffle images everytime an image is clicked
  // Images passed as parameter

  shuffleImages = newClicked => {
    for(var i = newClicked.length -1; i > 0; i--) {
      // Random number generated used to swap images
      const j = Math.floor(Math.random() * (i + 1))
      const temp = newClicked[i];
      newClicked[i] = newClicked[j];
      newClicked[j] = temp
    };
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
