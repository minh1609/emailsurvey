import React, { Component } from "react";
import { connect } from "react-redux";

export class Landing extends Component {
    render() {
        return (
            <div>
                <p>
                    This project is under development
                    <br /> Payment function is succesfully implemented, send
                    email is in progress
                </p>
                <p>
                    <h6>How to use payment</h6>
                    - Log in with your Google Account
                    <br />
                    - Click Add credit button
                    <br /> - Enter 4242 4242 4242 4242 as credit card number,
                    any email address, any day in the future for the date, any
                    number for CVC <br />- Click Pay, 5 credit will be adeed to
                    your account
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing);
