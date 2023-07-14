import React,{ Component } from "react";
import './RecipeInput.css'

class RecipeInput extends Component{
    static defaultProps = {
        onclose() {},
        onSave() {}
    }

    constructor(props) {
        super(props)
        this.state = {
            title:'',
            instructions:"",
            ingredients:[''],
            img:''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeIng = this.handleChangeIng.bind(this)
        this.handleChangeNewIng = this.handleChangeNewIng.bind(this)
    }

    handleChange = ((e) => {
        this.setState({[e.target.name]: e.target.value} )
    })

    handleSubmit = ((e) => {
        e.preventDefault()
        this.props.onSave(({...this.state}))
        this.setState({
            title:'',
            instructions:"",
            ingredients:[''],
            img:''
        })
    })

    handleChangeIng = ((e) => {
        const index = Number(e.target.name.split('-')[1])
        const ingredients = this.state.ingredients.map((ing,i) => (
            i === index ?  e.target.value : ing 
        ))
        this.setState({ingredients})
    })

    handleChangeNewIng = ((e) => {
        const {ingredients} = this.state
        this.setState({ingredients: [...ingredients,'']})
    })

    render(){
        const {title,instructions,ingredients,img} = this.state
        const {onClose} = this.props
        let inputs = ingredients.map((ing,i) =>(
            <div 
                className="recipe-form-line" 
                key={`ingredients-${i}`}
                >
                <label>{i+1}
                    <input
                        type='text'
                        name={`ingredients-${i}`}
                        value={ing}
                        placeholder="Ingredient"
                        autoCapitalize="off"
                        size={42}
                        onChange={this.handleChangeIng}
                    />
                </label>
            </div>
        ))
        return(
            <div className="recipe-form-container">
                <form className='recipe-form' onSubmit={this.handleSubmit}>
                    <button
                        className="close-button"
                        type='button'
                        onClick={onClose}
                    >    X
                    </button>
                    <div className="recipe-form-line">
                        <label htmlFor='recipe-form-title'>Title</label>
                        <input 
                            id='recipe-form-title'
                            value={title}
                            name='title'
                            type='text'
                            key='title'
                            autoComplete="off"
                            size={42}
                            onChange={this.handleChange}
                        />
                    </div>
                    <label 
                        htmlFor='recipe-intructions'
                        style={{marginTop:'5px'}}> 
                        Instructions
                    </label>
                    <textarea 
                        row='8' 
                        col='100' 
                        id='recipe-instructions' 
                        name='instructions' 
                        type='instructions'
                        value={instructions}
                        autoComplete="off"
                        key='instructions'
                        onChange={this.handleChange}
                    />
                    {inputs}
                    <button
                        type='button'
                        className="buttons"
                        onClick={this.handleChangeNewIng}>
                        +
                    </button>
                    <div className="recipe-form-line">
                        <label htmlFor='recipe-input-image'>
                            Image URL
                        </label>
                        <input
                            id='recipe-input-image'
                            value={img}
                            name='img'
                            key='img'
                            autoComplete="off"
                            placeholder=""
                            onChange={this.handleChange}
                            size={36}/>
                    </div>
                    <button
                        type='submit'
                        className="buttons"
                        style={{alignSelf:"end",marginRight:'0'}} >
                        Save    
                    </button>
                </form>
            </div>
        )
    }
}

export default RecipeInput