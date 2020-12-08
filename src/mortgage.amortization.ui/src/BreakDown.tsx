import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { DataItem } from './amortizationEngine'
import { Context } from './Provider'

const Breakdown = () => {
    const {state} = useContext(Context);

    return (
        <div>
            <Table striped hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Principal</th>
                        <th>Interest</th>
                        <th>Payment</th>
                        <th>Remaining Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.result.amortization.map((item) =>
                            <tr key={item.period}>
                                <td>{item.period}</td>
                                <td>{item.principal.toFixed(2)}</td>
                                <td>{item.interest.toFixed(2)}</td>
                                <td>{item.payment.toFixed(2)}</td>
                                <td>{item.balance.toFixed(2)}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Breakdown