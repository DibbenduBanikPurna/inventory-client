import React, { useEffect, useState } from 'react';

const MyTask = () => {
    const [myItem,setMyItem]=useState([])
    useEffect(()=>{
        fetch('')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setMyItem(myItem)
        })
    },[])
    return (
        <div className='container'>
            
            
        </div>
    );
};

export default MyTask;