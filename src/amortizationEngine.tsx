export const amortizationEngine = (loan: number, period: number, rate: number): Array<DataItem> => {
    let payments = [{
        period: 0,
        principle: 0,
        interest: 0,
        payment: 0,
        balance: Number(loan)
    }]

    let monthlyrate = rate / 12 / 100
    let payment = loan * monthlyrate / (1 - Math.pow(1 + (monthlyrate), - period))

    for (let index = 1; index <= period; index++) {
        console.log('calc 1')
        let previousbalance = payments[index - 1].balance
        let interest = previousbalance * monthlyrate
        let principle = payment - interest
        let balance = previousbalance - principle

        payments.push({
            period: index,
            interest,
            payment,
            principle,
            balance
        })
    }

    return payments
}

export type DataItem = {
    period: number,
    principle: number,
    interest: number,
    payment: number,
    balance: number
}