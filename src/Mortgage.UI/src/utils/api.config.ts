import * as qs from 'qs';
import { PathLike } from 'fs'

export const API_BASE_URL = 'http://localhost:3000/'

export const apiConfig = {
    returnRejectedPromiseOnError: true,
    withCredentials: false,
    timeout: 30000,
    baseURL: "http://localhost:5000/",
    headers: {
        common: {
            Accept: "application/json",
        },
    },
    paramsSerializer: (params: PathLike) => qs.stringify(params, { indices: false }),
}
