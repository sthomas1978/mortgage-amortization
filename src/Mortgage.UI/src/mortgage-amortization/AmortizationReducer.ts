import { CalculateAmortizationResponse } from "./MortgageApiClient";

export enum ActionType {
    LoanChanged,
    PeriodChanged,
    RateChanged,
    LoanTouched,
    PeriodTouched,
    RateTouched,
    CalculationInProgress,
    CalculationCompleted,
    CalculationError
}

export const startCalculation = (): Action => ({
    type: ActionType.CalculationInProgress,
    payload: ''
});

export const completeCalculation = (resp: CalculateAmortizationResponse): Action => ({
    type: ActionType.CalculationCompleted,
    payload: resp
});

export enum CalculationState {
    InProgress,
    Completed,
    Errored
}

export type Action = {
    type: ActionType
    payload: any
}

export type State = {
    loan: string,
    period: string,
    rate: string
    errors: {
        loan:boolean,
        period:boolean,
        rate:boolean
    },
    touched: {
        loan:boolean,
        period:boolean,
        rate:boolean
    },
    calculationState: CalculationState,
    result: CalculateAmortizationResponse
}

export const initialState = {
    loan: '',
    period: '',
    rate: '',
    errors: {
        loan: true,
        period: true,
        rate: true
    },
    touched: {
        loan: false,
        period: false,
        rate: false
    },
    calculationState: CalculationState.Completed,
    result: {
        loan: 0,
        period: 0,
        rate: 0,
        amortization: []
    }
}

const isNumber = (value:string ): boolean => value.length === 0 || isNaN(Number(value));

export const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.LoanChanged: {
            let newState = {...state, loan: action.payload }
            newState.errors.loan = isNumber(action.payload)
            return newState;
        };
        case ActionType.PeriodChanged: {
            let newState = {...state, period: action.payload }
            newState.errors.period = isNumber(action.payload)
            return newState;
        };
        case ActionType.RateChanged: {
            let newState = {...state, rate: action.payload }
            newState.errors.rate = isNumber(action.payload)
            return newState;
        };
        case ActionType.LoanTouched: {
            let newState = {...state}
            newState.touched.loan = true
            return newState;
        };
        case ActionType.RateTouched: {
            let newState = {...state}
            newState.touched.rate = true
            return newState;
        };
        case ActionType.PeriodTouched: {
            let newState = {...state }
            newState.touched.period = true
            return newState;
        };
        case ActionType.CalculationCompleted: {
            console.log(action);
            let newState = {...state, result: action.payload }
            return newState;
        }
        default:
            return state;
    }
}