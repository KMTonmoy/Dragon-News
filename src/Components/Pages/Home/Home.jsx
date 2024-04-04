import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RighSideNav from '../Shared/RightSideNav/RighSideNav';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
    const news = useLoaderData()

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-2'>
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div >
                    <RighSideNav></RighSideNav>
                </div>

            </div>
        </div>
    );
};

export default Home;