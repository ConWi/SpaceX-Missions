import {useEffect, useState} from "react";
import {getErrorMessage} from "../helpers/errorHandler";
import {IFetch} from '../types/api/fetch';
import { httpMethod } from "../types/api/http";

export const useFetch = <T,>(
    url: string,
    method: httpMethod,
    initialState: T
    ): IFetch<T> => {

    const [data, setData] = useState<T>(initialState);
    const [loading, setLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('')

    useEffect(() => {
        sendRequest()
    }, [])

    async function sendRequest() {
        setLoading(true);

        try {
            const response = await fetch(url, {method})

            if (!response.ok) {
                throw new Error(response.statusText)
            }

            setData(await response.json());
        } catch (error) {
            setErrorMessage(getErrorMessage(error));
            console.error(error);
        } finally {
            setLoading(false);
        }

    }

    return {
        loading,
        data,
        errorMessage
    };
};