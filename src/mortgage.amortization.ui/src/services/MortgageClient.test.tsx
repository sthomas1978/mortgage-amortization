/**
 * @jest-environment node
 */

import { Pact } from '@pact-foundation/pact'
import { HTTPMethod } from '@pact-foundation/pact/common/request'
import * as Path from 'path'
import { MortgageApi, CalculateAmortizationRequest, CalculateAmortizationResponse } from './MortgageApiClient'
import * as qs from 'qs';
import { PathLike } from 'fs'

const MOCK_PORT = Math.floor(Math.random() * 999) + 9000
const PROVIDER_URL = `http://localhost:${MOCK_PORT}`

const provider = new Pact({
    consumer: "Mortgage UI",
    provider: "Mortgage API",
    port: MOCK_PORT,
    log: Path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
    dir: Path.resolve(process.cwd(), 'pacts'),
    logLevel: 'info'
})

const apiConfig = {
    returnRejectedPromiseOnError: true,
    withCredentials: true,
    timeout: 30000,
    baseURL: PROVIDER_URL,
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    },
    paramsSerializer: (params: PathLike) => qs.stringify(params, { indices: false }),
}

const api = new MortgageApi(apiConfig)

describe("Integration tests", () => {

    beforeAll(() => {
        return provider.setup();
    });

    afterEach(async () => {
        await provider.verify();
    });

    afterAll(async () => {
        return provider.finalize();
    });

    const EXPECTED_RESPONSE_BODY: CalculateAmortizationResponse = { loan: 10, period: 20, rate: 1.5, amortization: [] }
    const EXPECTECD_REQUEST_BODY: CalculateAmortizationRequest = { loan: 10, period: 20, rate: 1.5 }

    describe('calling amortization endpoint', () => {
        test("performs amortization calculation", async () => {
            provider.addInteraction({
                state: 'i have mortgate calculation',
                uponReceiving: 'a request for calculation',
                withRequest: {
                    method: HTTPMethod.POST,
                    path: '/api/amortization',
                    headers: {
                        Accept: "application/json", 
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: EXPECTECD_REQUEST_BODY
            
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: EXPECTED_RESPONSE_BODY,
                }
            })

            const result = await api.calculateAmortization(EXPECTECD_REQUEST_BODY)        
            expect(result).toEqual(EXPECTED_RESPONSE_BODY)
        })
    })
})