import React, { Component } from 'react';
import Card from '../card/Card'
import './Board.css';

export default class Board extends Component{
    render() {
        return (
            <div className="board">
                {this.props.deck.map((card,key) => {
                        const isBeenComparing = this.props.selectedPair.indexOf(card) > -1;
                        return <Card
                            key={key}
                            card={card} 
                            isBeenComparing={isBeenComparing}
                            selectCard={this.props.selectCard}
                        >
                        </Card>
                    }
                )}
            </div>
        )
    }
}