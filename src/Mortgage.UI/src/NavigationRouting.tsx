import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./home/Home"
import HousePrices from "./house-prices/House-Prices"
import MortgageAmortization  from "./mortgage-amortization/MortgageAmortization"

export const NavigationRouting = () => {
    return (
        <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/mortgage-amortization">
                <MortgageAmortization />
            </Route>
            <Route path="/house-prices">
                <HousePrices />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    );
}

export default NavigationRouting
