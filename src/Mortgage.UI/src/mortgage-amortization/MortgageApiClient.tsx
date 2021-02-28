import { Api } from '../utils/api'
import { AxiosResponse } from 'axios'
import { apiConfig } from '../utils/api.config'

export type CalculateAmortizationRequest = {
    loan: number,
    period: number,
    rate: number
}

export type AmortizationLine = {
    period: number,
    principal: number,
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


    public async calculateAmortization(parameters: CalculateAmortizationRequest): Promise<CalculateAmortizationResponse> {
        const response = await this.post<string, CalculateAmortizationRequest, AxiosResponse<CalculateAmortizationResponse>>(
            'api/amortization', parameters)

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

export const mortgageApi = new MortgageApi(apiConfig)
