import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

export class Payment extends Component {
    render() {
        return (
            <StripeCheckout
                name="Email Survey"
                description="for credits"
                amount={500}
                //token: object returned when payment success
                token={token => {
                    console.log(token);
                }}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add credit</button>
            </StripeCheckout>
        );
    }
}

export default Payment;
