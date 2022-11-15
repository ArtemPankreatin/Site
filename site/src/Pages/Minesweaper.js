import React, { Component } from "react";
import Header_games from "../Components/Header_games";
import '../App.css'
import Footer from "../Components/Footer";

const Minesweaper = () =>{
        return(
                <>
                <Header_games/>
                <div className="widget">
                        <h1 style={{verticalAlign: 'middle'}}>Minesweaper</h1>
                </div>
                <Footer/>
                </>
        )

}

export {Minesweaper}