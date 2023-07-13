import React,{Component} from "react";
import './Navbar.css'

class Navbar extends Component{
    render(){
        return(
            <header>
                <h2>Recipe App</h2>
                <nav>
                    <li><a href='/home'>Home</a></li>
                    <li><a href='/recipe'>Recipe</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/contact'>Contact us</a></li>
                </nav>
            </header>
        )
    }
}

export default Navbar