import React, { ChangeEvent, FormEvent, useReducer } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { reducer, initialState, ActionType } from './AmortizationReducer'

type ValidationResult = {
    loan: boolean,
    period: boolean,
    rate: boolean
}

interface ParametersProps {
    calculateAmortization: (loan: number, period: number, rate: number) => void
}

const Parameters = (props: ParametersProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleLoanChange = (evt: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: ActionType.LoanChanged,
            payload: evt.target.value
        });
    }

    const handlePeriodChange = (evt: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: ActionType.PeriodChanged,
            payload: evt.target.value
        });
    }

    const handleRateChange = (evt: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: ActionType.RateChanged,
            payload: evt.target.value
        });
    }

    const handleLoanTouched = (evt: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: ActionType.LoanTouched,
            payload: ''
        });
    }

    const handlePeriodTouched = (evt: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: ActionType.PeriodTouched,
            payload: ''
        });
    }

    const handleRateTouched = (evt: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: ActionType.RateTouched,
            payload: ''
        });
    }

    const canBeSubmitted = () => !state.errors.loan && !state.errors.period && !state.errors.rate

    const onSubmit = (evt: FormEvent) => {
        evt.preventDefault()

        if (!canBeSubmitted()) {
            return
        }

        props.calculateAmortization(Number(state.loan), Number(state.period), Number(state.rate))
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group as={Row} controlId="loan">
                    <Form.Label column sm={1}>Loan</Form.Label>
                    <Col sm={2}>
                        <Form.Control placeholder="Loan" value={state.loan} onChange={handleLoanChange} onBlur={handleLoanTouched}
                            isValid={state.touched.loan && !state.errors.loan} isInvalid={state.touched.loan && state.errors.loan} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="period">
                    <Form.Label column sm={1}>Period</Form.Label>
                    <Col sm={2}>
                        <Form.Control placeholder="Period" value={state.period} onChange={handlePeriodChange} onBlur={handlePeriodTouched}
                            isValid={state.touched.period && !state.errors.period} isInvalid={state.touched.period && state.errors.period} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="rate">
                    <Form.Label column sm={1}>Rate</Form.Label>
                    <Col sm={2}>
                        <Form.Control placeholder="Rate" value={state.rate} onChange={handleRateChange} onBlur={handleRateTouched}
                           isValid={state.touched.rate && !state.errors.rate} isInvalid={state.touched.rate && state.errors.rate} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={{ span: 3, offset: 1 }}>
                        <Button type="submit" variant={!canBeSubmitted() ? 'warning' : 'success'} disabled={!canBeSubmitted()}>Calculate</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Parameters