import React, {useContext} from "react"
import { Formik, useField } from "formik"
import {Context} from './Provider'
import { Form, Button, Row, Col } from 'react-bootstrap'
import * as Yup from 'yup'

interface Props{
    label:string;
    name:string;
    type:string;
    placeholder:string
}

const InputText = (props:Props) => {
    const [field, meta] = useField(props)

    return (
        <Form.Group as={Row} controlId={props.name}>
            <Form.Label column sm={1}>{props.label}</Form.Label>
            <Col sm={2}>
                <Form.Control {...field} {...props}
                    isValid={meta.touched && !meta.error} isInvalid={meta.touched && (meta.error != null)} />
            </Col>
        </Form.Group>
    )
}

const Parameters = () => {
    const {calculateAmortization} = useContext(Context)

    return (
        <div>
            <Formik
                initialValues={{
                    loan: '',
                    period: '',
                    rate: ''
                }}
                validationSchema={Yup.object({
                    loan: Yup.number()
                        .required('Required'),
                    period: Yup.number()
                        .required('Required'),
                    rate: Yup.number()
                        .required('Required')
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setSubmitting(true);

                    calculateAmortization({
                        loan: Number(values.loan),
                        period: Number(values.period),
                        rate: Number(values.rate)});

                    setSubmitting(false);
                }}
            >
                {({
                    handleSubmit,
                    isValid,
                    dirty
                }) => (
                    <Form onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit()
                    }}>
                        <InputText
                            label="Loan"
                            name="loan"
                            type="text"
                            placeholder="Enter loan amount"
                        />

                        <InputText
                            label="Period"
                            name="period"
                            type="text"
                            placeholder="Enter period"
                        />

                        <InputText
                            label="Rate"
                            name="rate"
                            type="text"
                            placeholder="Enter rate"
                        />

                        <Form.Group as={Row}>
                            <Col sm={{ span: 3, offset: 1 }}>
                                <Button  type="submit" 
                                    variant={!(dirty && isValid) ? 'warning' : 'success'} 
                                    disabled={!(dirty && isValid)}>Calculate</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Parameters