import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import Checkout from './pages/checkout'
import Success from './pages/success'
import './reset.css'

function RoutesList() {
    return (
        <Switch>
            <Route exact path="/checkout">
                <Checkout />
            </Route>

            <Route exact path="/success">
                <Success />
            </Route>

            <Route exact path="*">
                <Redirect to="/checkout" />
            </Route>
        </Switch>
    )
}

export default RoutesList