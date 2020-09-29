import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

function validate({loan, period, rate}) {
    return {
        loan: loan.length === 0 || isNaN(loan),
        period: period.length === 0 || isNaN(period),
        rate: rate.length ===0 || isNaN(rate)
    }
}


const Parameters = (props) => {
    const [loan, setLoan] = useState('')
    const [period, setPeriod] = useState('')
    const [rate, setRate] = useState('')
    const [touched, setTouched] = useState({loan: false, period: false, rate: false})

    const handleLoanChange = (e) => {
        setLoan(e.target.value)
    }

    const handlePeriodChange = (e) => {
        setPeriod(e.target.value)
    }

    const handleRateChange = (e) => {
        setRate(e.target.value)
    }

    const handleBlur = (field) => (e) => {
        setTouched({...touched, [field]: true})
    } 

    const canBeSubmitted = () => {
        const errors = validate({loan, period, rate})
        const isDisabled = Object.keys(errors).some(x => errors[x])

        return !isDisabled
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!canBeSubmitted()) {
            return
        }

        props.calculateAmortization(loan, period, rate)
    }

    const errors = validate({loan, period, rate})
        
    const shouldMarkError = (field) => {
        const hasError = errors[field]
        const shouldShow = touched[field]

        return hasError ? shouldShow : false
    }

    const shouldMarkSuccess = (field) => {
        const hasSuccess = !errors[field]
        const shouldShow = touched[field]

        return hasSuccess ? shouldShow: false
    }    

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
                    <Col sm={{span:3, offset: 1}}>
                        <Button type="submit" variant={isDisabled ? 'warning' : 'success'} disable={isDisabled.toString()}>Calculate</Button>
                    </Col>
                </Form.Group>
            </Form>    
        </div>
    )
}

export default Parameters