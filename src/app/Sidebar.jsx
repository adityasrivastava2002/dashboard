"use client";

import React from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {PiMedalFill} from "react-icons/pi";
import { leaderBoardDetails } from '../../assets/data/leaderboard';
import {CiLogout} from "react-icons/ci"

const Sidebar = () => {
  return (
    <div className='w-[28%] p-6 border-r-2 border-gray-new shadow-md shadow-gray-new bg-white/10 backdrop-blur-lg
    max-lg:w-[100%]'>
        {/* logo */}
        <div className='flex items-center gap-2 text-xl px-2'>
            <div className='bg-gray-300 rounded-full h-[1.2rem] w-[1.2rem]'></div>
            <div className='text-gray-300'>Chat<span className='text-white font-semibold'>SAT</span></div>
        </div>

        {/* new thread */}
        <div className='px-6 py-3 my-6 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-md text-white'>
            <p>New Thread</p>
        </div>

        {/* streak */}
        <div className='px-6 py-3 my-6 border border-gray-600 shadow-md shadow-gray-new rounded-xl bg-white/10 backdrop-blur-md text-white
        flex justify-between transition delay-200 ease-out hover:scale-105 cursor-pointer
        max-xl:flex-col'>
            <div className='w-[32%] max-xl:w-[60%] max-xl:mx-auto'>
                <CircularProgressbarWithChildren value={300/4} 
                    strokeWidth={12}
                    styles={buildStyles({
                    pathColor: `#edff87`,
                    textColor: '#edff87',
                    trailColor: "rgba(42,42,42,255)"
                })}
                >
                    <div className='text-yellow-new text-[1.8rem]'>4/7</div>
                    <div className='font-medium'>Streak</div>
                </CircularProgressbarWithChildren>
            </div>
            <div className='text-yellow-new w-[68%] flex flex-col justify-center items-end gap-2 max-xl:max-xl:py-5 max-xl:items-center
            max-xl:w-[100%]'>
                <div className='text-white text-3xl flex items-center gap-1 max-xl:mx-auto'><PiMedalFill className='text-yellow-new'/>0/223 <span className='text-yellow-new'>XP</span></div>
                <button className='border-gray-600 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-md text-sm
                hover:scale-105 transition ease-out hover:bg-white/20 hover:text-yellow-200'>
                    Take a Quiz
                </button>
            </div>
        </div>

        {/* Leaderboard */}
        <div className='my-6 border border-gray-600 shadow-md shadow-gray-new rounded-xl bg-white/10 backdrop-blur-md text-white'>
            <div className='rounded-xl text-sm bg-white/10 backdrop-blur-md w-full px-6 py-4'>Leaderboard</div>
            <div className='flex flex-col gap-2 py-2 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 h-[15rem]'>
                {
                    leaderBoardDetails.map((detail, i)=>(
                        <div key={i} className='flex justify-between items-center mx-4 py-2 px-1 rounded-md bg-white/10 backdrop-blur-md
                        transition delay-200 ease-out hover:scale-105 cursor-pointer'>
                            <div className='flex items-center px-2 py-1 gap-1'>
                                <p className='text-yellow-new'>{detail.Serial}</p>
                                <PiMedalFill  className='text-yellow-400'/>
                                <div className='w-[1rem] h-[1rem] rounded-full bg-white'></div>
                                <p>{detail.Name}</p>
                            </div>
                            <div className='flex gap-1 py-1 px-2'>
                                <p>{detail.xp}<span className='text-yellow-new'> XP</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

        {/* profile */}
        <div className='flex flex-col gap-2 max-lg:items-center max-lg:w-[100%]'>
            <div className='flex gap-2 items-center'>
                <div className='h-[2rem] w-[2rem] bg-white rounded-full'></div>
                <div className='text-white text-2xl'>Name</div>
            </div>
            <div className='text-white text-xs px-1 flex gap-2 items-center'>
                <CiLogout />
                <div>Sign Out</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar