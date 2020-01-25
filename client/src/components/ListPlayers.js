import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function ListPlayers(){



    const url = 'http://localhost:5000/api/players';

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        axios.get(url).then(r => {
            setResult(r.data);
            setLoading(false);
            console.log('from axios', r.data );

        });
    }, [url]);




    return (
        <div>
            <h1>List of Players</h1>
            <ul>

                {result.map(item => (
                    console.log('from map', item),
                    <li >{item.name} from {item.country}</li>
                ))};

            </ul>
        </div>
    );
}