export const API_LAUNCHES_URL = 'https://api.spacexdata.com/v3/launches'

export interface IFetch<T> {
    loading: boolean,
    data: T | [],
    errorMessage: string
}