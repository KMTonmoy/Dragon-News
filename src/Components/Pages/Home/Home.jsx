import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RighSideNav from '../Shared/RightSideNav/RighSideNav';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-2'>
                    <>This Is Main</>
                </div>
                <div >
                    <RighSideNav></RighSideNav>
                </div>

            </div>
        </div>
    );
};

export default Home;