import { Api } from '../utils/api'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

export type CalculateAmortizationRequest = {
    loan: number,
    period: number,
    rate: number
}

export type AmortizationLine = {
    period: number,
    principle: number,
    interest: number,
    payment: number,
    balance: number
}

export type CalculateAmortizationResponse = {
    loan: number,
    period: number,
    rate: number
    amortization: Array<AmortizationLine>
}

export class MortgageApi extends Api {
    constructor(config?: AxiosRequestConfig) {
        super(config)
    }

    public async calculateAmortization(parameters: CalculateAmortizationRequest): Promise<CalculateAmortizationResponse> {
        const response = await this.post<string, CalculateAmortizationRequest, AxiosResponse<CalculateAmortizationResponse>>(
            'api/amortization', parameters)

        //console.log(response)
        const { data } = response
        const result: CalculateAmortizationResponse = {
            loan: data.loan,
            period: data.period,
            rate: data.rate,
            amortization: data.amortization
        }
        return result
    }

    public async Hello(): Promise<string>{
        const response = await this.get<string>('api/amortization')
        const { data } = response

        return data
    }

}

export const mortgageApi = new MortgageApi()
