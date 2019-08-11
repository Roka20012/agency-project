import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import ContactForm from "./components/Contacts";
import Login from "./components/Login";
import { Footer } from "./components/Home";
import Buy from "./components/Buy";
import Sell from "./components/Sell";
import RegisterForm from "./components/Register";

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/contact" component={ContactForm} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/buy" component={Buy} />
                <Route path="/sell" component={Sell} />
                <Route component={App} />
            </Switch>
            <Footer />
        </div>
    </Router>,
    document.getElementById("root")
);
