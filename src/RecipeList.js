import React,{Component} from "react";
import Recipe from './Recipe'
import './RecipeList.css'

class RecipeList extends Component{
    static defaultProps = {
        recipes: [
            {
                title: "Spaghetti",
                instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
                ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
                img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/06/chicken-pasta-chicken-spaghetti.jpg"
            },
            {
                title: "Milkshake",
                instructions: "Combine ice cream and milk.  Blend until creamy",
                ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
                img: "https://www.oliviascuisine.com/wp-content/uploads/2021/06/strawberry-milkshake.jpg"
            },
            {
                title: "Avocado Toast",
                instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
                ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
                img: "https://theurbenlife.com/wp-content/uploads/2023/02/Avocado-toast-with-everything-bagel-seasoning-500x500.jpg"
            },
            {
                title: "Veg Burger",
                instructions: "Pressure cook carrots, peas and corn.Add the spices.Add mashed potatoes.Shallow fry the patties. Prepare the burger.Add sliced ​​onions,cucumber and tomatoes.",
                ingredients: ["sliced ​​onion","sliced ​​tomato","teaspoon refined oil","teaspoon powdered red chilli","cheese slices","tablespoons breadcrumbs"],
                img: "https://images.immediate.co.uk/production/volatile/sites/2/2020/04/Cheeseburger-74e8cde.jpg"
            },
            {
                title: "Chicken Biryani",
                instructions: "Add oil to a pot or pressure cooker and heat it.Add onions and fry till they turn golden.Next add chicken and fry till the color changes slightly to pale.Add chopped tomatoes, yogurt, red chili powder, coriander leaves and mint. Cook till the mixture turns thick and dry.",
                ingredients: ["1 cup boiled basmati rice","600 gm chicken","1/2 teaspoon mint leaves","1 tablespoon garam masala powder","3 green cardamom"],
                img: "https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800"
            },
            {
                title: "Momos",
                instructions: "Then to make the Indian vegetable momos divide the dough into 22 equal portions. Roll a portion of the dough into a 75 mm.Hold it on your palms, fold the two sides and pinch them.Steam 6 momos in a greased steamer for 10 to 12 or till they are cooked.",
                ingredients: ["450 gm all purpose flour", "1 tablespoon refined oil", "Soya chunks", "2 teaspoons soy sauce", "2 large onions","Green chillies","water"],
                img: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg"
            }
        ]
    }
    render(){
        const recipes = this.props.recipes.map((rec,index) => (
            <Recipe key={index} {...rec}/>
        ))
        return(
            <div className="recipe-list">
                {recipes}
            </div>
        )
    }
}

export default RecipeList