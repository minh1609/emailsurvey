import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import { fetchUser } from "../actions/";
import Landing from "./Landing";
const SurveyNew = () => <h1>SurveyNew</h1>;

export class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Landing} />

                        <Route
                            exact
                            path="/surveys/new"
                            component={SurveyNew}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(
    null,
    { fetchUser }
)(App);
