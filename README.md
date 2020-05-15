# 18 React: Clicky Game

## Summary 

The purpose of the assignment was to create a memory game with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

```
Minimum Requirements

This assignment must be deployed. Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Github Pages and adding a README.md are required for this homework. In addition, add this homework to your portfolio. More information can be found below.

```

## Application Site

![Site](clicky-game/public/puppy-clicky-game.png)

## Technologies Used

- HTML - used to create elements on the DOM
- CSS - styles HTML elements on page
- Bootstrap - CSS development framework that helps create beautiful, responsive layouts using human-friendly HTML
- JavaScript - provides dynamic interactivity on HTML documents
- Node.js - asynchronous event-driven JavaScript runtime
- React.js - JavaScript library for building user interfaces
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Heroku - cloud platform that lets developers build, deliver, monitor and deploy apps rapidly

## Installation & Use

To use the application simply use the deloyed site link below and follow the instruction to play:

https://wtgibson.github.io/18-clicky-game/

### How To Play

Simply click any puppy image to start the game. As you click each new puppy, your score will go up. Beat the game by clicking every unique puppy and be sure not to click the same card puppy or you'll lose the game!

## Code Snippet

Below is the JSX render function utilizing state within the Navbar, Wrapper, and Card components.

```jsx
render() {
    return (
        <div className="bg-light">
            <Navbar 
                text={this.state.text}
                score={this.state.score}
                highScore={this.state.highScore} />
            <div className="jumbotron text-center bg-light">
                <h1>Puppy Clicky Game</h1>
                <p> Click on each puppy once and only once to win the game!</p>
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
```
<!-- [Deployed Site](https://wtgibson.github.io/18-clicky-game/) -->

[GitHub Project Repo](https://github.com/wtgibson/18-clicky-game)

## Author Links

![Site](clicky-game/public/images/william-gibson-jr-photo.jpg)

Will Gibson

[LinkedIn](https://www.linkedin.com/in/wtgibson/)

[GitHub](https://github.com/wtgibson)