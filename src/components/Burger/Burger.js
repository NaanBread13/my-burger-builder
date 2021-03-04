import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // console.log(igKey); // each element is the key
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                // console.log(igKey + " " + (i + 1)); // Represents how many there is of each element 
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, currVal) => {
            // console.log(arr + currVal); /// flattens the array by taking each array and makes them
            // each an individual object in the array with reduce
            return arr.concat(currVal);
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger
