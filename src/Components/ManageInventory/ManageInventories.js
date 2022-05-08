import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';
import ManageInventory from './ManageInventory';

const ManageInventories = () => {
    const [data,setData]=useState(Data)
    useEffect(()=>{
        fetch('')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    })
    return (
        <div className='container'>
            <div className='row'>
                {
                    data.map((data)=>{
                        return <ManageInventory key={data.id} data={data} />
                    })
                }
            </div>
            <button className='btn btn-info'>Add Item</button>
                
        </div>
    );
};

export default ManageInventories;