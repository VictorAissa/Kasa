import { useEffect, useState } from "react";

export async function getData(url) {
    /*
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);*/

    //async function getContent(url) {
    //try {
    const response = await fetch(url);
    const data = await response.json();
    //setData(data);
    /*
    } catch (error) {
        //setError(true);
        console.log(error);
    }
    //}
    /*
    useEffect(() => {
        getContent(url);
    }, [url]);*/

    return await data;
}
