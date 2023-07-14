import './RecipeApp.css';
import RecipeList from './RecipeList.js'
import RecipeInput from './RecipeInput'
import Navbar from './Navbar';
import React,{ Component } from 'react';

class RecipeApp extends Component {
  constructor(props){
    super(props)
    this.state={
      recipes: [
        {
          id:1,
          title: "Hamburger",
          instructions: "Pressure cook carrots, peas and corn.Add the spices.Add mashed potatoes.Shallow fry the patties. Prepare the burger.Add sliced ​​onions,cucumber and tomatoes.",
          ingredients: ["sliced ​​onion","sliced ​​tomato","teaspoon refined oil","teaspoon powdered red chilli","cheese slices","tablespoons breadcrumbs"],
          img: "https://hips.hearstapps.com/hmg-prod/images/copycat-shake-shack-burger-4-min-1649427734.jpg"
        },
        {
          id:2,
          title: "Chicken Biryani",
          instructions: "Add oil to a pot or pressure cooker and heat it.Add onions and fry till they turn golden.Next add chicken and fry till the color changes slightly to pale.Add chopped tomatoes, yogurt, red chili powder, coriander leaves and mint. Cook till the mixture turns thick and dry.",
          ingredients: ["1 cup boiled basmati rice","600 gm chicken","1/2 teaspoon mint leaves","1 tablespoon garam masala powder","3 green cardamom"],
          img: "https://recipe30.com/wp-content/uploads/2023/03/chicken-Biryani.jpg"
        },
        {
          id:3,
          title: "Momos",
          instructions: "Then to make the Indian vegetable momos divide the dough into 22 equal portions. Roll a portion of the dough into a 75 mm.Hold it on your palms, fold the two sides and pinch them.Steam 6 momos in a greased steamer for 10 to 12 or till they are cooked.",
          ingredients: ["450 gm all purpose flour", "1 tablespoon refined oil", "Soya chunks", "2 teaspoons soy sauce", "2 large onions","Green chillies","water"],
          img: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg"
        }
      ],
      
      nextRecipeId:4,
      showform:false
    }
    this.handleSave = this.handleSave.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  handleSave = ((recipe) => {
    this.setState((prevState,props) => {
      const newRecipe = {...recipe,id:this.state.nextRecipeId}
      return {
        nextRecipeId : prevState.nextRecipeId + 1,
        recipes:[...this.state.recipes,newRecipe],
        showform:false
      }
    })
  })

  onDelete = ((id) => {
    const recipes = this.state.recipes.filter(recipe => recipe.id !== id)
    this.setState({recipes})
  })

  render(){
    const {showform} = this.state
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showform:true})} />
        {showform ? 
          <RecipeInput 
            onSave={this.handleSave}
            onClose={() => this.setState({showform:false})}
        /> : null} 
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;
