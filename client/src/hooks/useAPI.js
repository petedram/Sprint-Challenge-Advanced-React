import React, { useEffect, useState } from "react";
import axios from 'axios';


export function useAPI(url) {

const [useResult, setResult] = useState();
const [loading, setLoading] = useState(false);

useEffect(() => {
    setLoading(true);
    axios.get(url).then(r => {
      setResult(r.data);
      setLoading(false);
    });
  }, [url]);
 
  console.log('result from useAPI return', useResult);

  return [useResult, loading]
}