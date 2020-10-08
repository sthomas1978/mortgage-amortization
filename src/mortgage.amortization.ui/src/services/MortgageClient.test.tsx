import { Pact } from '@pact-foundation/pact'
import { HTTPMethod } from '@pact-foundation/pact/common/request'
import * as Path from 'path'
import { MortgageApi } from '../services/MortgageApiClient'
import * as qs from 'qs';
import { PathLike } from 'fs'

describe("Pact", () => {
    // const MOCK_PORT = Math.floor(Math.random() * 999) + 9000
    // const PROVIDER_URL = `http://localhost:${MOCK_PORT}`

    // const apiConfig = {
    //     returnRejectedPromiseOnError: true,
    //     withCredentials: true,
    //     timeout: 30000,
    //     baseURL: PROVIDER_URL,
    //     headers: {
    //         common: {
    //             "Cache-Control": "no-cache, no-store, must-revalidate",
    //             Pragma: "no-cache",
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //         },
    //     },
    //     paramsSerializer: (params: PathLike) => qs.stringify(params, { indices: false }),
    // }

    // const provider = new Pact({
    //     consumer: "Mortgage UI",
    //     provider: "Mortgage API",
    //     port: MOCK_PORT,
    //     log: Path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
    //     dir: Path.resolve(process.cwd(), 'pacts'),
    //     logLevel: 'info'
    // })

    // const EXPECTED_BODY = [
    //     {
    //         loan: 10,
    //         period: 20,
    //         rate: 1.5,
    //         amortization: []
    //     }
    // ]

    const api = new MortgageApi()

    // beforeEach(() => provider.setup())

    // afterEach(() => provider.finalize())

    describe('Integration tests', () => {
        // beforeEach(() => {
        //     provider.addInteraction({
        //         state: 'i have mortgate calculation',
        //         uponReceiving: 'a request for calculation',
        //         withRequest: {
        //             method: HTTPMethod.POST,
        //             path: '/api/calculate',
        //             headers: {
        //                 Accept: 'application/json'
        //             }
        //         },
        //         willRespondWith: {
        //             status: 200,
        //             headers: {
        //                 "Content-Type": "application/json"
        //             },
        //             body: EXPECTED_BODY,
        //         }
        //     })
        // })

        it('returns correct body', async () => {

        })

        // it('successfully verifies', () => provider.verify())
    })

})