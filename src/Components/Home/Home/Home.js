import React from 'react';
import Items from '../../Items/Items';
import Banner from '../Banner/Banner';
import Bio from '../Bio/Bio';
import Reviews from '../Review/Reviews';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Items/>
           <Bio/>
           <Reviews/>
        </div>
    );
};

export default Home;