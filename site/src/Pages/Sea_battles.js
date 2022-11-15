import React, { Component } from "react";
import Header_games from "../Components/Header_games";
import '../App.css'
import Footer from "../Components/Footer";

const Sea_battles = () =>{
        return(
                <>
                <Header_games/>
                <div className="widget">
                        <h1 style={{verticalAlign: 'middle'}}>Sea_battles</h1>
                </div>
                <Footer/>
                </>
        )

}

export {Sea_battles}