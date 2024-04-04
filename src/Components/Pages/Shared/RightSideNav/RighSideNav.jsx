import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import qzone1Img from '../../../../assets/assets/qZone1.png';
import qzone2Img from '../../../../assets/assets/qZone2.png';
import qzone3Img from '../../../../assets/assets/qZone3.png';

const RighSideNav = () => {
    return (
        <div>
            <div>
                <h2 className='font-[600] text-[20px] text-[#403F3F]'>Login With</h2>

                <div className='flex justify-center'>
                    <div className='w-full '>
                        <button className='btn w-[80%] border-2 border-blue-400 text-blue-400 my-2'> <FaGoogle />
                            Login with Google</button>
                        <button className='btn w-[80%] border-2 border-gray-500 text-gray-500'> <FaGithub />
                            Login with Github</button>

                    </div>
                </div>
            </div>

            {/* FindUs  */}
            <div className='mt-5'>
                <h2 className='font-[600] text-[20px] text-[#403F3F]'>Find Us On</h2>

                <div className='flex justify-center'>
                    <div className='w-full mt-5'>
                        <a href="#" className=' text-lg text-gray-500 gap-2 flex items-center'><FaFacebook />
                            Facebook</a><br />
                        <a href="#" className=' text-lg text-gray-500 gap-2 flex items-center'><IoLogoTwitter />
                            Twitter</a><br />
                        <a href="#" className=' text-lg text-gray-500 gap-2 flex items-center'><FaInstagram />
                            Instagram</a><br />

                    </div>
                </div>
            </div>

            {/* Qzone */}

            <div className='mt-5'>
                <h2 className='font-[600] text-[20px] text-[#403F3F]'>Q-Zone</h2>

                <div className='flex justify-center'>
                    <div className='w-full mt-5'>
                        <div>
                            <img src={qzone1Img} alt="" />
                        </div>
                        <div>
                            <img src={qzone2Img} alt="" />
                        </div>
                        <div>
                            <img src={qzone3Img} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RighSideNav;