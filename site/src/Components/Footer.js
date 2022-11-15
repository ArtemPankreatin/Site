import React ,{ Component } from 'react'
import '../App.css'
import discord_logo from '../images/discord_logo.png'
import instagram_logo from '../images/instagram_logo.png'
import telegram_logo from '../images/telegram_logo.png'


export default class Footer extends Component{
    render(){
        return(
            <footer className='footer'>
                <img
                src={discord_logo}
                width={30}
                height={30}
                style={{marginRight: 15}}
                />
                <img
                src={instagram_logo}
                width={30}
                height={30}
                style={{marginRight: 15}}
                />
                <img
                src={telegram_logo}
                width={30}
                height={30}
                style={{marginRight: 15}}
                />
                <p>Copyright © Upbeat Code 2022</p>
            </footer>
        )
    }
  }