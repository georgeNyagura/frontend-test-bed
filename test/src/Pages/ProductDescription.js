import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


// const keyToComponentMap = {
//     li: Li
// }

function ProductDescription({name}){
    const [voucher, setVoucher] = useState([])
    useEffect(()=> {
        axios.get( `http://localhost:8002/categories`,)
        .then(res=>{
           return res
        }).then(data => {
            setVoucher(Object.values(data.data))
            console.log(Object.values(data.data))
        }
        )
        .catch(error=>{
            console.log(error);
            //setError(error)
        })
    }, [])

    let navigate = useNavigate()
     

    return(
        <button className='nav-buttons' key={name} onClick={() => navigate('/Product-Descrption')}>{name}</button>
    );
}

export default ProductDescription;