import { useCallback, useEffect, useState } from "react";

const useFetch = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const sendRequest = useCallback(async(url, method = 'GET', body = null, headers = {}) => {
        try {
            setIsLoading(true);
            const response = await fetch(url, { method, body, headers });
            const responseData = await response.json();
            if (!response.ok) {
                console.log('Something went wrong');
            };
            setIsLoading(false);
            return responseData;
        } catch (err) {
            setError(err);
            setIsLoading(false);
        };

    }, []);

    const clearError = () => {
        setError(null);
    }

    return { sendRequest, clearError, error, isLoading }

};

export default useFetch;