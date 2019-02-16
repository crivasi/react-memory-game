import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component{
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(card) {
        //const cardDomElement = e.target.parentNode.parentNode;
        //cardDomElement.classList.add('is-flipped');
        this.props.selectCard(card);
    }

    render() {
        return (
            <div className={`flip-box${this.props.isBeenComparing || this.props.card.discovered ? ' is-flipped' : ''}`}>
                <div className="flip-box-inner">
                <div 
                    className="flip-box-front"
                    onClick={() => this.handleClick(this.props.card)}
                >
                </div>
                <div className="flip-box-back">
                    <i className={`fa ${this.props.card.icon}`}></i>
                </div>
                </div>
            </div>
        )
    }
}