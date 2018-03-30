import React, {Component} from 'react';
import classes from './Dish.css';
import Aux from '../../hoc/Aux/Aux';
const queryString = require('query-string');

class Dish extends Component {
    state = {
        dish: null,
        recipe: []
    };

    componentWillMount() {
        const parsed = queryString.parse(this.props.location.search);
        this.setState({
            dish: parsed,
            recipe: parsed.rec.split(',').slice(1)
        })
        console.log('parsed search object: ', parsed);
        console.log('recipe: ', parsed.rec.split(',').slice(1));
    }

    render() {
        console.log(this.props);
        const recipeSteps = this.state.recipe.map(step => {
            return <li key={step}>{step}</li>
        });
        return(
            <Aux>
                <div className={classes.DescriptionAlt}>
                    <p>{this.state.dish.description}</p>
                </div>
                <div className={classes.Wrapper}>
                    <div className={classes.Dish} onClick={this.props.clicked}>
                        <h3>{this.state.dish.name}</h3>
                        <div>
                            <img className={classes.DishImage} src={this.state.dish.img} alt="broken"/>
                        </div>  
                    </div>           
                    <div className={classes.Recipe}>
                        <h3>recipe</h3>
                        <ol>{recipeSteps}</ol>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Dish;