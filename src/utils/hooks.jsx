import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    async function getContent(url) {
        try {
            const response = await fetch(url, {
                method: "GET",
                // mode: "no-cors",
            });
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    }

    useEffect(() => {
        getContent(url);
    }, [url]);

    return { data, error };
}
