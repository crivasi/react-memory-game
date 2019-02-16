import React, { Component } from 'react';
import './Header.css';

// export const Header = (props) => {
//     return (
//         <header>
//             <h1 className="title">
//                 Ex!
//             </h1>
//             <h3 className="title attempts">
//                 Attempts: {props.attempts}
//             </h3>
//             <div>
//                 <button className="button-reset">
//                     <i className="fa fa-refresh"></i>
//                     Reset
//                 </button>
//             </div>
//         </header>
//     )
// }

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1 className="title header">
                    Memory!
                </h1>
                <h2 className="title">
                    Attempts: 
                    <span className="attempts">{this.props.attempts} </span>
                </h2>
                <div>
                    <button 
                        className="button-reset"
                        onClick={this.props.resetGame} 
                    >
                        <i className="fa fa-refresh"></i>
                        Reset
                    </button>
                </div>
            </header>
        )
    }
}