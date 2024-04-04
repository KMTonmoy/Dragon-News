import React from 'react';
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom';
const BrakingNews = () => {
    return (
        <div className='flex my-5 items-center'>
            <button className='btn bg-pink-600 text-white'>Latest</button>
            <Marquee pauseOnHover={true}>
                <Link to={'/'}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;