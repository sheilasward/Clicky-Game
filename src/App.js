import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import PrincessCard from "./components/PrincessCard";
import princesses from "./princesses.json";

class App extends Component {

  state = {
    princesses: princesses,
    score: 0,
    highScore: 0,
    guess: "Click an image to begin"
  };

  markCard = (id) => {
    const updPrincesses = this.state.princesses.map(u => {
      if (u.id === id) {
        if (u.clicked === true) {

          this.setState({guess: "You guessed incorrectly!"});
          this.resetGame();
          this.shuffleCards();
          return u;
        }
        this.setState({
          score: this.state.score + 1
        });

        if (this.state.score === this.state.highScore) {
          this.setState({
            highScore: this.state.highScore + 1
          });
        }
        if ((this.state.score + 1) === this.state.princesses.length) {
          this.setState({guess: "You won the game!!"});
          this.resetGame();
          this.shuffleCards();
          return u;
        } else {
          this.setState({guess: "You guessed correctly!"});
        } 
        console.log(this.state.score);
        console.log(this.state.highScore);
        u.clicked = true;
      }
      return u;
    })
    this.setState({
      princesses: updPrincesses,
    });
    this.shuffleCards();
  }

  resetGame = () => {
    const clearPrincesses = this.state.princesses.map(c => {
      c.clicked = false;
      return c;
    });
    this.setState({
      score: 0,
      princesses: clearPrincesses
    });
  }

  shuffleCards = () => {
    const shufflePrincesses = this.state.princesses.slice();
    let princessIndex = this.state.princesses.length;
    let randomIndex = 0;
    let tempPrincess = {};
    while (princessIndex) {
      randomIndex = Math.floor(Math.random() * princessIndex--);
      tempPrincess = shufflePrincesses[princessIndex];
      shufflePrincesses[princessIndex] = shufflePrincesses[randomIndex];
      shufflePrincesses[randomIndex] = tempPrincess;
    }
    this.setState({
      princesses: shufflePrincesses,
    });
    return princesses;
  }

  render() {
    return (
      <Wrapper>
        <NavBar
          score={this.state.score}
          highScore={this.state.highScore}
          guess={this.state.guess}
        />
        <div className="card-container">
          {this.state.princesses.map(p => (
            <PrincessCard 
              pData={p} 
              key={p.id}
              markCard={this.markCard}
            />
          ))}
        </div>
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
 