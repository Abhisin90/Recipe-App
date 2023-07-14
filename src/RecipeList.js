import React,{Component} from "react";
import Recipe from './Recipe'
import './RecipeList.css'

class RecipeList extends Component{
    render(){
        const {onDelete} = this.props 
        const recipes = this.props.recipes.map((rec,index) => (
            <Recipe key={rec.id} {...rec} onDelete={onDelete}/>
        ))
        return(
            <div className="recipe-list">
                {recipes}
            </div>
        )
    }
}

export default RecipeList