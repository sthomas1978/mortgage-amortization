import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

function validate({loan, period, rate}) {
    return {
        loan: loan.length === 0 || isNaN(loan),
        period: period.length === 0 || isNaN(period),
        rate: rate.length ===0 || isNaN(rate)
    }
}

class Parameters extends Component{
    state = {
        loan: '',
        period : '',
        rate: '',
        touched: {
            loan: false,
            period: false,
            rate: false
        }
    }

    handleLoanChange = (e) => {
        this.setState({loan: e.target.value})
    }

    handlePeriodChange = (e) => {
        this.setState({period: e.target.value})
    }

    handleRateChange = (e) => {
        this.setState({rate: e.target.value})
    }

    handleBlur = (field) => (e) => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        })

    } 

    canBeSubmitted = () => {
        const errors = validate(this.state)
        const isDisabled = Object.keys(errors).some(x => errors[x])

        return !isDisabled
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.canBeSubmitted()) {
            return
        }

        const {loan, period, rate } = this.state
        this.props.calculateAmortization(loan, period, rate)
    }

    render () {
        const errors = validate(this.state)
        const {loan, period, rate} = this.state

        const shouldMarkError = (field) => {
            const hasError = errors[field]
            const shouldShow = this.state.touched[field]

            return hasError ? shouldShow : false
        }

        const shouldMarkSuccess = (field) => {
            const hasSuccess = !errors[field]
            const shouldShow = this.state.touched[field]

            return hasSuccess ? shouldShow: false
        }

        const isDisabled = Object.keys(errors).some(x => errors[x])
        return(
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group as={Row} controlId="loan">
                        <Form.Label column sm={1}>Loan</Form.Label>
                        <Col sm={2}>
                            <Form.Control placeholder="Loan" value={loan} onChange={this.handleLoanChange} onBlur={this.handleBlur("loan")}
                                isValid={shouldMarkSuccess("loan")} isInvalid={shouldMarkError("loan")} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="period">
                        <Form.Label column sm={1}>Period</Form.Label>
                        <Col sm={2}>
                            <Form.Control placeholder="Period" value={period} onChange={this.handlePeriodChange} onBlur={this.handleBlur("period")}
                                isValid={shouldMarkSuccess('period')} isInvalid={shouldMarkError('period')} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="rate">
                        <Form.Label column sm={1}>Rate</Form.Label>
                        <Col sm={2}>
                            <Form.Control placeholder="Rate" value={rate} onChange={this.handleRateChange} onBlur={this.handleBlur("rate")}
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
}

export default Parameters