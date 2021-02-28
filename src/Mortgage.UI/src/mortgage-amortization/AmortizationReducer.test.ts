import { ActionType, reducer, initialState } from './AmortizationReducer'

describe('AmortizationReducer tests', () => {
    const expectedInitialState = {
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
        }
    }

    it('initial state should be set correctly', () => {
        expect(initialState).toStrictEqual(expectedInitialState)
    })

    it('should set loan valid given a numeric value', () => {
        const action = { type: ActionType.LoanChanged, payload: '1'}
    
        var result = reducer(initialState, action);
    
        expect(result.errors.loan).toBe(false);
    })

    it('should set loan invalid given a character value', () => {
        const action = { type: ActionType.LoanChanged, payload: 'c'}
    
        var result = reducer(initialState, action);
    
        expect(result.errors.loan).toBe(true);
    })

    it('should set period valid given a numeric value', () => {
        const action = { type: ActionType.PeriodChanged, payload: '1'}
    
        var result = reducer(initialState, action);
    
        expect(result.errors.period).toBe(false);
    })

    it('should set period invalid given a character value', () => {
        const action = { type: ActionType.PeriodChanged, payload: 'c'}
    
        var result = reducer(initialState, action);
    
        expect(result.errors.period).toBe(true);
    })

    it('should set rate valid given a numeric value', () => {
        const action = { type: ActionType.RateChanged, payload: '1'}
    
        var result = reducer(initialState, action);
    
        expect(result.errors.rate).toBe(false);
    })

    it('should set rate invalid given a character value', () => {
        const action = { type: ActionType.RateChanged, payload: 'c'}
    
        var result = reducer(initialState, action);
    
        expect(result.errors.rate).toBe(true);
    })

    it('should set loan touched to true given action on loan input', () => {
        const action = { type: ActionType.LoanTouched, payload: null}
    
        var result = reducer(initialState, action);
    
        expect(result.touched.loan).toBe(true);
    })

    it('should set period touched to true given action on period input', () => {
        const action = { type: ActionType.PeriodTouched, payload: null}
    
        var result = reducer(initialState, action);
    
        expect(result.touched.period).toBe(true);
    })

    it('should set rate touched to true given action on rate input', () => {
        const action = { type: ActionType.RateTouched, payload: null}
    
        var result = reducer(initialState, action);
    
        expect(result.touched.rate).toBe(true);
    })
})

