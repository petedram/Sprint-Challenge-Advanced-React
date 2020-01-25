import React, { useEffect, useState } from "react";
import { useAPI } from '../hooks/useAPI';
import axios from 'axios';


export const listLen = (arrayIn) => {
    return arrayIn.length
}


export default function ListPlayers(){

    const url = 'http://localhost:5000/api/players';

  // custom hook

    // const [loading, result] = useAPI(url);


    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);
    const [error, setError] = useState();


    useEffect(() => {
        setLoading(true);
        axios.get(url).then(r => {
            setResult(r.data);
            setLoading(false);
            console.log('from axios', r.data );
            listLen(r.data);

        });
    }, [url]);

    // useEffect(() => {
    //     console.log('useEffect!!!', result)
    //     console.log(result)
    // }, [result]);



    // if (Array.isArray(result) === false ){
    //     console.log('not yet array');
    //     return <div><h1>Loading......</h1></div>
    // } else {

    return (

        <div>
            <h1>Search interest in players in the Women's World Cup 2015 since 2004	</h1>
            <ul>

                {result.map(item => (
                    console.log('from map', item),
                    <li>{item.name} from {item.country} Search Interest {item.searches}</li>
                ))}

            </ul>
        </div>
    );
}
