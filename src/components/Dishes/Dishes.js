import React from 'react';
import classes from './Dishes.css'

const dishes = (props) => {
    return(
        <div className={classes.Dish} onClick={props.clicked}>
            <div>
                <img style={{height: '200px', width: '200px'}}src={props.image} alt="broke"/>
            </div>
            <div>
                <h3>{props.name}</h3>
            </div>
        </div>
    );
}

export default dishes;