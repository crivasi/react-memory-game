import React, { Component } from 'react';
import Header from './components/header/Header';
import Board from './components/board/Board';
import buildDeck from './utils/buildDeck';
import './App.css';


const getInitialState = () => {
  const deck = buildDeck();
  const attempts = 0;
  return { 
    deck,
    attempts,
    selectedPair:[],
    isComparing: false 
  };
}

class App extends Component {
  constructor() {
    super();
    this.state = getInitialState();
  }

  isEqualPair = () => {
    this.setState({
      isComparing: true,
      attempts: this.state.attempts + 1
    });

    setTimeout(() => {
      const [firstCard,secondCard] = this.state.selectedPair;
      let deckModified = this.state.deck;
      
      if(firstCard.icon === secondCard.icon) {
        deckModified = deckModified.map(card => {
          if(card.icon !== firstCard.icon) {
            return card;
          }
          return { ...card,discovered:true };
        });
      }

      this.setState({
        deck:deckModified,
        selectedPair: [],
        isComparing: false
      });

      this.validateVictory();
    },750);
  }

  selectCard = (card) => {
    console.log(this);
    if(this.state.isComparing || card.discovered) {
      return;
    }
    console.log(card);

    const selectedPair = [...this.state.selectedPair,card];
    this.setState({
      selectedPair
    });
    
    if(selectedPair.length === 2) {
      this.isEqualPair();
    }
  }

  resetGame = () => {
    this.setState(getInitialState());
  }

  validateVictory = () => {
    if(this.state.deck.filter((card) => !card.discovered).length === 0) {
      alert(`You WIN in ${this.state.attempts} attempts, Congratulations! (click Reset)`);
      this.resetGame();
    }
  }

  render() {
    return (
      <div className="App">
        <Header 
          attempts={this.state.attempts}
          resetGame={this.resetGame}
        />
        <Board 
          deck={this.state.deck}
          selectedPair={this.state.selectedPair} 
          selectCard={this.selectCard}
        />
      </div>
    );
  }
}

export default App;
