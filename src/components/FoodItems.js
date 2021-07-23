import React from 'react'
import FoodItem from './FoodItem'

const food = [
    {
        foodName: 'Italian Combo',
        price: '$12.99',
        ingredients: 'deli meat, lettuce, tomato, Italian bread, provolone, mayonaise',
        id: 1
    },
    {
        foodName: 'Pastrami Sandwhich',
        price: '$13.99',
        ingredients: 'pastrami, rye bread',
        id: 2
    },
    {
        foodName: 'Peanutbutter and Jelly',
        price: '$4.99',
        ingredients: 'Peanutbutter, Jelly, sourdough bread',
        id: 3
    }
]


function FoodItems (){
    return(
        <div>
            {food.map(sandwhich =>
                <FoodItem key={sandwhich.id} item={sandwhich} />)}
        </div>
    )
}

export default FoodItems



