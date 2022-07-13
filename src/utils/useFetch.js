import React, { useState } from "react"

export const useFetch = async (link) => {

    
    const [data, setdata] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    try {
        const res = await fetch(link);
        const resJson = await res.json();
        console.log('resJson is', resJson);

        setdata(resJson);
        setError(false);
        setIsLoading(false);
    } catch (e) {
        console.log(e);
        setError(e);
        alert(e);
    }

    return { data, error, isLoading };
}