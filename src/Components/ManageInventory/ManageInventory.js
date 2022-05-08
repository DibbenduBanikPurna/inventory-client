import React, { useEffect } from 'react';

const ManageInventory = ({data}) => {
    useEffect(()=>{
        fetch('',{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)})
    },[])
    return (
        <div className='col-md-4'>
            <div className='card'>
                <img src={data.image} alt=""/>
                <p>{data.name}</p>
                <button className='btn btn-danger'>Delete Item</button>
            </div>
        </div>
    );
};

export default ManageInventory;