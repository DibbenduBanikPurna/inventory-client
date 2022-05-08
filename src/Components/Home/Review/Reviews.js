
import React from 'react';
import Review from './Review';

const Reviews = () => {
    const data=[
        {
            name:'taznneen',
            info:'nice products',
            ratting:'5 star'
        },
        {
            name:'emran',
            info:'nice products',
            ratting:'5 star'
        },
        {
            name:'nafiz',
            info:'nice products',
            ratting:'5 star'
        }
    ]
    return (
        <div className='container'>
            <div className='row mt-5'>
            {
                data.map((data)=>{
                    return <Review data={data}/>
                })
            }
            </div>
            
        </div>
    );
};

export default Reviews;