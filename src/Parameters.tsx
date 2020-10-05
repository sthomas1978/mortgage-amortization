import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

type ValidationResult = {
    loan: boolean,
    period: boolean,
    rate: boolean
}

interface ParametersProps {
    calculateAmortization: (loan: number, period: number, rate: number) => void
}

function validate(loan: string, period: string, rate: string): ValidationResult {
    return {
        loan: loan.length === 0 || isNaN(Number(loan)),
        period: period.length === 0 || isNaN(Number(period)),
        rate: rate.length === 0 || isNaN(Number(rate))
    }
}

const Parameters = (props: ParametersProps) => {
    const [loan, setLoan] = useState('')
    const [period, setPeriod] = useState('')
    const [rate, setRate] = useState('')
    const [touched, setTouched] = useState({ loan: false, period: false, rate: false })

    const handleLoanChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setLoan(evt.target.value)
    }

    const handlePeriodChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setPeriod(evt.target.value)
    }

    const handleRateChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setRate(evt.target.value)
    }

    const handleBlur = (field: string) => (evt: ChangeEvent<HTMLInputElement>) => {
        setTouched({ ...touched, [field]: true })
    }

    const canBeSubmitted = () => {
        const errors = validate(loan, period, rate)
        // @ts-ignore
        const isDisabled = Object.keys(errors).some(x => errors[x])

        return !isDisabled
    }

    const onSubmit = (evt: FormEvent) => {
        evt.preventDefault()

        if (!canBeSubmitted()) {
            return
        }

        props.calculateAmortization(Number(loan), Number(period), Number(rate))
    }

    const errors = validate(loan, period, rate)

    const shouldMarkError = (field: string) => {
        // @ts-ignore
        const hasError = errors[field]
        // @ts-ignore
        const shouldShow = touched[field]

        return hasError ? shouldShow : false
    }

    const shouldMarkSuccess = (field: string) => {
        // @ts-ignore
        const hasSuccess = !errors[field]
        // @ts-ignore
        const shouldShow = touched[field]

        return hasSuccess ? shouldShow : false
    }

    // @ts-ignore
    const isDisabled = Object.keys(errors).some(x => errors[x])

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group as={Row} controlId="loan">
                    <Form.Label column sm={1}>Loan</Form.Label>
                    <Col sm={2}>
                        <Form.Control placeholder="Loan" value={loan} onChange={handleLoanChange} onBlur={handleBlur("loan")}
                            isValid={shouldMarkSuccess("loan")} isInvalid={shouldMarkError("loan")} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="period">
                    <Form.Label column sm={1}>Period</Form.Label>
                    <Col sm={2}>
                        <Form.Control placeholder="Period" value={period} onChange={handlePeriodChange} onBlur={handleBlur("period")}
                            isValid={shouldMarkSuccess('period')} isInvalid={shouldMarkError('period')} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="rate">
                    <Form.Label column sm={1}>Rate</Form.Label>
                    <Col sm={2}>
                        <Form.Control placeholder="Rate" value={rate} onChange={handleRateChange} onBlur={handleBlur("rate")}
                            isValid={shouldMarkSuccess('rate')} isInvalid={shouldMarkError('rate')} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={{ span: 3, offset: 1 }}>
                        <Button type="submit" variant={isDisabled ? 'warning' : 'success'} disabled={isDisabled}>Calculate</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Parameters