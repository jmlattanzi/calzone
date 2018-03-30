import React, { Component } from 'react';
import Dishes from '../Dishes/Dishes';
import axios from 'axios';

class Gallery extends Component {
    state = {
        dishes: []
    };

    componentWillMount() {
        axios.get('https://nutrition-ce711.firebaseio.com/dishes.json')
            .then(response => {
                console.log(response);
                const updatedDishes = Object.keys(response.data).map(key => response.data[key]);
                this.setState({dishes: updatedDishes})
                console.log('updatedDishes', updatedDishes);
                console.log('updatedDishes.recipe: ', updatedDishes.rec);
            })
            .catch(error => {
                console.log('ERROR: ', error)
            });
    }

    dishClickedHandler = (dish) => {
        this.props.history.push({
            pathname: this.props.match.url + dish.id,
            search: '?name=' + dish.name 
                + '&description=' + dish.description 
                + '&img=' + dish.imgSrc 
                + '&rec=' + dish.recipe
        });
    }

    render() {
        let dishes = this.state.dishes.map(dish => {
            return (
                <Dishes 
                    key={dish.id} 
                    name={dish.name} 
                    id={dish.id}
                    image={dish.imgSrc}
                    clicked={() => this.dishClickedHandler(dish)}/>
            )
        });

        return(
            <div>
                {dishes}
            </div>
        );
    }
}

export default Gallery;