import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({data}) => {
    return (
        <div className='col-md-4'>
            <div className='card'>
                <img src={data.image} alt=""/>
                <p>{data.name}</p>
                <h5>{data.price}</h5>
                <p>{data.quantity}</p>
                <h5>{data.supplier_name}</h5>
                <p>{data.description}</p>
              <Link to={`/inventory/${data.id}`}>  <button className='btn btn-warning'>stock update</button></Link>
            </div>
            
        </div>
    );
};

export default Item;