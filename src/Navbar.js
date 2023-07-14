import React,{Component} from "react";
import './Navbar.css'

class Navbar extends Component{
    static defaultProps = {
        onNewRecipe() {}
    }

    render(){
        return(
            <header>
                <h2>Recipe App</h2>
                <nav>
                    <li><a href='/'>Home</a></li>
                    <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Contact us</a></li>
                </nav>
            </header>
        )
    }
}

export default Navbar