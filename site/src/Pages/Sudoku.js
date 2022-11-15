import React, { Component } from "react";
import Header_games from "../Components/Header_games";
import '../App.css'
import Footer from "../Components/Footer";
let sudoku_field = [[1,2,3,4,5,6,7,8,9],
                [4,5,6,7,8,9,1,2,3],
                [7,8,9,1,2,3,4,5,6],
                [2,3,4,5,6,7,8,9,1],
                [5,6,7,8,9,1,2,3,4],
                [8,9,1,2,3,4,5,6,7],
                [3,4,5,6,7,8,9,1,1],
                [6,7,8,9,1,2,3,4,5],
                [9,1,2,3,4,5,6,7,8]
] 



const Sudoku = () =>{
        return(
                <>
                <Header_games/>
                <div className="widget">
                        <h1>Sudoku</h1>
                        <div className="table">
                                <table>
                                        <tbody style={{backgroundColor: "black"}}>
                                                {
                                                        [0, 1, 2, 3, 4, 5, 6, 7, 8,].map((row, rIndex) => {
                                                        return <tr key={rIndex}>
                                                                        {[0, 1, 2, 3, 4, 5, 6, 7, 8,].map((col, cIndex) => {
                                                                        return <td  key={rIndex + cIndex} className="td">
                                                                                <input className="cellInput"/>
                                                                                </td>
                                                                        })}
                                                                </tr>
                                                })}
                                        </tbody>
                                </table>
                        </div>
                </div>
                <Footer/>
                </>
        )

}

export {Sudoku}