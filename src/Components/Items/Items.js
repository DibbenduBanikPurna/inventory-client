import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';
import Item from './Item';

const Items = () => {
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
            <div className='row mt-5 pt-5'>
                {
                    data.map((data)=>{
                        return <Item data={data} />
                    })
                }
            </div>
            
        </div>
    );
};

export default Items;