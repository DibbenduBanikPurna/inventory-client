import React from 'react';

const Review = ({data}) => {
    return (
        <div className='col-md-4'>
            <h2>{data.name}</h2>
            <p>{data.info}</p>
            <h4>{data.ratting}</h4>
            
        </div>
    );
};

export default Review;