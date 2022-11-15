import React, { Component } from "react";

import '../App.css'
import Header_games from "../Components/Header_games";
import Footer from "../Components/Footer";

const Checkers = () =>{
        return(
                <>
                <Header_games/>
                <div className="widget">
                        <h1 style={{verticalAlign: 'middle'}}>Checkers</h1>
                </div>
                <Footer/>
                </>
            
        )

}

export {Checkers}