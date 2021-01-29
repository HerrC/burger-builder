import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    // ingredients is an object not an array
    // Object.keys liefert die keys vom Object: meat, salad, cheese, ...
    // die Anzahl ist hier nicht dabei
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // create an array e.g. with Array(3) with 3 undefined
            // ich will ein Array der Länge, wie oft die Zutat vorkommt
            // [,] array with e.g. 2 elements für cheese
            return [...Array(props.ingredients[igKey])]
                // _ blank zeigt, mir ist das Element selber wurscht, ich brauch nur den index
                .map((_, i) => {
                    // key must be set because we return an array
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                })
        }).reduce((prev, curr) => {
            // prev is the always updated root array
            return prev.concat(curr);
        }, []);

    // flatten the transformedIngredients -> reduce:
    // previous value, current value gets the first method.

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    console.log(transformedIngredients);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;