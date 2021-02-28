import React from "react"
import Parameters from "./Parameters"
import Breakdown from "./Breakdown"
import Provider from "./Provider";

export const MortgageAmortization = () => {
    return (
        <>
            <h1>Mortgage Amortization</h1>
            <Provider>
                <Parameters />
                <Breakdown />
            </Provider>
        </>);
}

export default MortgageAmortization