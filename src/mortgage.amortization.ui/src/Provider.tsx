import React, { useReducer} from "react"
import { reducer, initialState, startCalculation, completeCalculation, State, Action } from './AmortizationReducer'
import { CalculateAmortizationRequest, mortgageApi } from "./services/MortgageApiClient";

interface IContext {
    state: State,
    dispatch: React.Dispatch<Action>,
    calculateAmortization: (request: CalculateAmortizationRequest) => void    
}

export const Context = React.createContext({} as IContext)

const Provider = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const calculateAmortization = (request: CalculateAmortizationRequest) => {
        dispatch(startCalculation());
        mortgageApi.calculateAmortization(request)
            .then(result => dispatch(completeCalculation(result)))
    }

    return(
        <Context.Provider value={{state, dispatch, calculateAmortization}}>
            {props.children}
        </Context.Provider>  
    );
}

export default Provider