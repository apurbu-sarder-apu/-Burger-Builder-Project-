import React from 'react';
import './Burger.css'
import Ingredient from '../Ingredient/Ingredient'

const Burger = props => {
    let IngredientArr = props.ingredients.map(item => {
        let amountArr = [...Array(item.amount).keys()];
        return amountArr.map(_ => {
            return <Ingredient type={item.type} key={Math.random()}/>
        })


    })
    .reduce((arr, element)=>{
        return arr.concat(element);
    }, []);

    if (IngredientArr.length === 0) {
        IngredientArr = <p>Please add some ingredient</p>
    }
    console.log(IngredientArr);
    return (
        <div className="Burger">
            <Ingredient type="bread-top" />
            {IngredientArr}
            <Ingredient type="bread-bottom" />

        </div>
    )
}

export default Burger;