import { useEffect, useState } from "react";
import axios from 'axios';



export const apiFail = (error) => {

    if (error === true) {
        return 1
    } else {
        return 0
    }
}


export function useAPI(url) {

const [result, setResult] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

apiFail(error);


 useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then(r => {
                setResult(r.data);
                setLoading(false);
                console.log('from axios', r.data );
            })
            .catch(error => {
                setError(true);
            })
    }, [url]);
 

  return (result)}