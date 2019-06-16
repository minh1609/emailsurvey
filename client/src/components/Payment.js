import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as action from "../actions";

export class Payment extends Component {
    render() {
        return (
            <StripeCheckout
                name="Email Survey"
                description="for credits"
                amount={500}
                //token: object returned when finish payment
                token={token => {
                    this.props.handleToken(token);
                }}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add credit</button>
            </StripeCheckout>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    handleToken: action.handleToken
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Payment);
