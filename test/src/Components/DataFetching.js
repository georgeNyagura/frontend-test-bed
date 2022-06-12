import React, { useState, useEffect } from 'react';
import axios from 'axios'

function DataFetching(){
    

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    let navigate = useNavigate()
    useEffect(()=> {
        setLoading(true)
        axios.get( `http://localhost:8002/categories`)
        .then(res=>{
            return res
        }).then(data => {
            setData(Object.values(data.data))
            console.log(Object.values(data.data))
        }
        )
        .catch(error=>{
            console.log(error);
            setError(error)
        })
        .finally( ()=>
            setLoading(false)
        )
    }, [])
    const listItems = data?.map(c => 
            <button key={c}  onClick={() => navigate('/Product-Description/Product-ID')}>{c}</button>
        )

    return(
        <div className='hotel-container'>
            <div className=''>
                VOUCHERS TYPES
            </div>
            <div className='inner'>
            {listItems}  
            </div>
        </div>
    )

}

export default DataFetching;
