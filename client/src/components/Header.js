import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchUser } from "../actions/index";
import Payment from "./Payment";

export class Header extends Component {
    renderContennt() {
        if (this.props.auth === null) {
            return null;
        } else if (this.props.auth === false) {
            return <a href="/auth/google">Log in with Google</a>;
        } else {
            return (
                <React.Fragment>
                    <li>
                        <Payment />
                    </li>
                    <li>
                        <a href="/api/logout">Log out </a>
                    </li>
                </React.Fragment>
            );
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? "/surveys" : "/"}
                        className="left brand-logo"
                    >
                        Email Survey{" "}
                    </Link>
                    <ul className="right">{this.renderContennt()}</ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = { fetchUser };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
