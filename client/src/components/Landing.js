import React, { Component } from "react";
import { connect } from "react-redux";

export class Landing extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Landing Page</h1>
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
