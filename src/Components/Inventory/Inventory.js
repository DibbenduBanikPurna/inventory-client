import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data/Data';

const Inventory = () => {
    const [data]=useState(Data)
    const [info,setInfo]=useState({})
    const [amount,setAmount]=useState(0)
    console.log(info)
    const {id}=useParams();
    useEffect(()=>{
        fetch('')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setInfo(data)
        })
    },[])
    const  remain=data.filter((data)=>data.id===id)
    setInfo(remain)
    const handleSubmit=e=>{
        e.preventDefault()
        
    }

    
    return (
      <div className='container'>
          <div className='row'>
              <div className='col-md-5'>
              <div className='card'>
                <img src={info.image} alt=""/>
                <p>{info.name}</p>
                <button className='btn btn-danger'>sold</button>
            </div>

              </div>
              <div className='col-md-6'>
              <h3 className='text-primary'>restock the items</h3>
                  <form onSubmit={handleSubmit}>
                      <input onChange={(e)=>setAmount(e.target.value)} type="number" placeholder='increase items'/>
                      <input type="submit" value="increase"/>
                  </form>

              </div>
          </div>
           
      </div>
    );
};

export default Inventory;