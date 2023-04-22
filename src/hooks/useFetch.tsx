import {useEffect, useState} from "react";
import {getErrorMessage} from "../helpers/errorHandler";

export const useFetch = <T,>(
    url: string,
    options: RequestInit,
    initialState: T,
    loadOnStart: boolean = true
    ): [boolean, T | undefined, string, () => void] => {

    const [data, setData] = useState<T>(initialState);
    const [loading, setLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('')

    useEffect(() => {
        if (loadOnStart) sendRequest()
    }, [loadOnStart]);

    const request = () => {
        sendRequest();
    }

    async function sendRequest() {
        setLoading(true);

        try {
            const response = await fetch(url, options)

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

    return [
        loading,
        data,
        errorMessage,
        request
    ];
};