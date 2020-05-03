import logo from '../../logo.svg'
import './Navbar.scss'
import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <img src={logo} class="img-responsive" alt="Logo Image"/>
                <ul className="navbar-links">
                    <li><a href="#" className="navbar-link">Home</a></li>
                    <li><a href="#" className="navbar-link">About Us</a></li>
                    <li><a href="#" className="navbar-link active">Tours</a></li>
                </ul>
            </nav>
        )
    }
}


