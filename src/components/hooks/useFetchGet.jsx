import { useState, useEffect } from 'react';

const useFetchGet = (url) => {
    const [status, setStatus] = useState(0);
    const [statusText, setStatusText] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getAPIData = async (signal) => {
        setLoading(true);
        try {
            const apiResponse = await fetch(url, signal);
            const json = await apiResponse.json();
            setStatus(apiResponse.status);
            setStatusText(apiResponse.statusText);
            setData(json);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getAPIData(signal);

        return () => {
            controller.abort();
        };
    }, [url]);

    return { status, statusText, data, error, loading };
};

export default useFetchGet;