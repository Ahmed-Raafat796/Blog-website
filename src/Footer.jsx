import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebook,FaGithub,FaInstagram ,FaTwitter, FaTwitch } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='w-full bg-black text-gray-300 py-8 px-2 bg-no-repeat'>

        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>

            <div>
                <h6 className='font-bold uppercase py-2'>Solutions</h6>

                <ol>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                </ol>
            </div>
            <div>
                <h6 className='font-bold uppercase py-2'>Solutions</h6>

                <ol>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                </ol>
            </div>

            <div>
                <h6 className='font-bold uppercase py-2'>Solutions</h6>

                <ol>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                </ol>
            </div>

            <div>
                <h6 className='font-bold uppercase py-2'>Solutions</h6>

                <ol>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                    <li className='py-1'> Ads </li>
                </ol>
            </div>

            <div className='col-span-2 pt-2 md:pt-2'>

                <p className='font-bold uppercase'>Subscribe To Our Newsletter</p>
                <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-3 rounded-md mb-2  text-black bg-amber-50' type="email" placeholder='Enter email' />
                    <button className='p-2 mb-2 bg-emerald-500 text-white hover:bg-emerald-800 rounded-md cursor-pointer'>Subscribe</button>

                </form>

            </div>

        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-400 items-center'>
            <p>2025 CWTS, LLC. All right reserved.</p>

            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl gap-2'>
                <FaFacebook/>
                <FaGithub/>
                <FaInstagram/>
                <FaTwitter/>
                <FaTwitch/>

            </div>

        </div >

        </div>
    )
}

export default Footer