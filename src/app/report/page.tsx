import React from 'react';
import Image from 'next/image';
import profileImage from '../../../public/profile1.png';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-r from-[#a1ffd9] to-[#f3ff77] p-12 text-gray-800 antialiased'>
      <div className='w-auto max-w-3xl rounded-lg bg-white p-8 shadow-2xl shadow-neutral-600'>
        {/*  */}
        <h1 className='text-center text-2xl font-bold sm:text-3xl'>
          Daily Average Stats
        </h1>
        <div className='mt-8 flex flex-wrap'>
          {/*  */}
          <div className='m-4 flex h-64 min-w-[12rem] flex-1 flex-col justify-between rounded-2xl bg-teal-200 p-6 text-center'>
            <p className='text-lg'>Avg. Steps /day</p>
            <p className='text-4xl font-bold'>9,340</p>
            <div>
              <strong>+355</strong>
              <p>last month</p>
            </div>
          </div>
          {/*  */}
          <div className='m-4 flex h-64 min-w-[12rem] flex-1 flex-col justify-between rounded-2xl bg-teal-200 p-6 text-center'>
            <p className='text-lg'>Minutes /day</p>
            <p className='text-4xl font-bold'>94</p>
            <div>
              <strong>+12</strong>
              <p>last month</p>
            </div>
          </div>
          {/*  */}
          <div className='m-4 flex h-64 min-w-[12rem] flex-1 flex-col justify-between rounded-2xl bg-teal-200 p-6 text-center'>
            <p className='text-lg'>kCal Burnt /day</p>
            <p className='text-4xl font-bold'>142</p>
            <div>
              <strong>+22</strong>
              <p>last month</p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}
