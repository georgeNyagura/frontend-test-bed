import React from 'react'
import {useEffect, useState } from 'react'
import axios from 'axios'
function FetchMerchant() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=> {
      setLoading(true)
      axios.get(`http://localhost:8002/categories`)
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
    <div className='container'>
      <div className='left'>
      </div>
      <div className='right'>
          <button className='nav-buttons' key={c} >{c}</button>
      </div>
    </div>
    )

  return (
    <div>
      {listItems}
    </div>
  )
}

export default FetchMerchant