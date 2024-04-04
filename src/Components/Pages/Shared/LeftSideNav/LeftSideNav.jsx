import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [catagories, setcatagories] = useState([])
    useEffect(() => {
        fetch('/public/categories.json')
            .then(res => res.json())
            .then(data => setcatagories(data))
    }, [])

    const [newses, setcatagoriessetNewes] = useState([])
    useEffect(() => {
        fetch('/public/news.json')
            .then(res => res.json())
            .then(data => setcatagoriessetNewes(data))
    }, [])
 

    return (
        <div>
            <div>
                <h1 className='font-[600]'>All Category</h1>
                <ul>
                    {
                        catagories.map(catagorie => <li key={catagorie.id} className='text-gray-500 ml-5 mt-2'><Link to={`category/${catagorie.id}`}>{catagorie.name}</Link></li>)
                    }
                </ul>
            </div>
            <div className='mt-10'>
                {newses.slice(0, 3).map((news, index) => (
                    <div key={index} className="card w-[267px] bg-base-100 shadow-xl mt-5">
                        <figure><img src={news.image_url} alt="Shoes" /></figure>
                        <div className="card-body p-5">
                            <h2 className="text-2xl">{news.title}</h2>
         
                        </div>
                    </div>
                ))}

            </div>


        </div>
    );
};

export default LeftSideNav;