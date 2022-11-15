import React, { Component } from "react";
import Footer from "../Components/Footer";
import '../App.css'
import Header_games from "../Components/Header_games";

class Tic_tac_toe extends React.Component{
        constructor(props){
                super(props);
                this.state = {
                        squares:Array(9).fill(null),
                        count : 0
                }
        }
        clickHandler = event => {
                let data = event.target.getAttribute('data');
                let currentSquare = this.state.squares;
                if(currentSquare[data] === null){
                        currentSquare[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
                this.setState({count : this.state.count+1}) 
                this.setState({squares : currentSquare}) 
                }
                
        }
        resetGame = event => {
                this.setState({squares:Array(9).fill(null)})
                this.setState({count:0})
        }
        render(){
                return(
                        <>
                        <Header_games/>
                    <div className="widget">
                        <h1 >Крестики Нолики</h1>
                        <div className="ttt-restart-button" onClick={this.resetGame}>
                                Restart
                        </div>
                            <div className="tic-tac-toe">
                                <div className="ttt-square" onClick={this.clickHandler} data="0">{this.state.squares[0]}</div>
                                <div className="ttt-square" onClick={this.clickHandler} data="1">{this.state.squares[1]}</div>
                                <div className="ttt-square" onClick={this.clickHandler} data="2">{this.state.squares[2]}</div>
                                <div className="ttt-square" onClick={this.clickHandler} data="3">{this.state.squares[3]}</div>
                                <div className="ttt-square" onClick={this.clickHandler} data="4">{this.state.squares[4]}</div>
                                <div className="ttt-square" onClick={this.clickHandler} data="5">{this.state.squares[5]}</div>
                                <div className="ttt-square" onClick={this.clickHandler} data="6">{this.state.squares[6]}</div>
                                <div className="ttt-square" onClick={this.clickHandler} data="7">{this.state.squares[7]}</div>
                                <div className="ttt-square" onClick={this.clickHandler} data="8">{this.state.squares[8]}</div>
                            </div>
        
                    </div>
                    <Footer/>
                    </>
                )
        }
        

}

export {Tic_tac_toe}