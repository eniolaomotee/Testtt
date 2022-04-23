import React from "react";
import Aux from "../../../HOC/Auxiliary";
import Button from "../../UI/Button/Button";

const OrderSummary = (props)=>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey =>{
        return <li key={igKey}>
            <span style={{textTransform:"capitalize"}}>{igKey}</span>
            :{props.ingredients[igKey]}</li>
    })
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following Ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to CheckOut</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );

}

export default OrderSummary;