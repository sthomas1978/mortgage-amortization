import React from 'react'
import { Table } from 'react-bootstrap'

const Breakdown = (props) => {
    return (
        <div>
            <Table striped hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Principle</th>
                        <th>Interest</th>
                        <th>Payment</th>
                        <th>Remaining Balance</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.data.map((item) => 
                        <tr key={item.period}>
                            <td>{ item.period }</td>
                            <td>{ item.principle.toFixed(2) }</td>
                            <td>{ item.interest.toFixed(2) }</td>
                            <td>{ item.payment.toFixed(2) }</td>
                            <td>{ item.balance.toFixed(2) }</td>
                        </tr>
                        )
                }    
                </tbody>
            </Table>      
        </div>
    )
}

export default Breakdown