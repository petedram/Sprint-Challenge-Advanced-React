import React, { useEffect, useState } from "react";
import { useAPI } from '../hooks/useAPI';
import axios from 'axios';



export default function ListPlayers(){

    const url = 'http://localhost:5000/api/players';


    return (

        <div>
            <h1>Search interest in players in the Women's World Cup 2015 since 2004	</h1>,
            {/* custom hook */}
            {useAPI(url)}
        </div>
    );
}
