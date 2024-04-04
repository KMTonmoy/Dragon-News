import React from 'react';
import logo from '../../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
            <div className='flex justify-center pb-3 pt-5'>
                <img src={logo} alt="" />
            </div>

            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl mt-2'>{moment().format("MMM, D, YYYY")}</p>

        </div>
    );
};

export default Header;