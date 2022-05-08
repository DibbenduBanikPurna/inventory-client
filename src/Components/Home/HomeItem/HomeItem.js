import React, { useEffect, useState } from 'react';

const HomeItem = () => {
    const [item,setItem]=useState([])
    useEffect(()=>{
        fetch('')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setItem(data).slice(0,6)
        })
    })
    return (
        <div className='container'>
                <div className='row'>

                </div>
        </div>
    );
};

export default HomeItem;