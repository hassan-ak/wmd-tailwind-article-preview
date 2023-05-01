import React from 'react';
import Image from 'next/image';
import profileImage from '../../public/profile1.png';
import Link from 'next/link';

export default function Home() {
  return (
    // Main container
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-[#D4FC79] to-[#96E6A1] p-6 sm:p-12'>
      {/* Card Container */}
      <div className='flex max-w-[24rem] flex-col rounded-xl bg-white sm:max-w-xl md:max-w-3xl md:flex-row'>
        <div>
          <h1 className='my-5 text-center text-5xl font-extrabold'>
            CSS Flex & Grid
          </h1>
          <div className='mb-5 h-2 bg-gray-700'></div>
          <div className='flex flex-wrap justify-around'>
            {/* Flex Examples */}
            <div className='p-5'>
              <h1 className='text-xl font-semibold'>Flex Examples</h1>
              <ul className='list-decimal px-10'>
                <li>
                  <Link href='article'>Article Preview</Link>
                </li>
                <li>
                  <Link href='report'>Fitness Report</Link>
                </li>
                <li>
                  <Link href='tweet'>Single Tweet</Link>
                </li>
              </ul>
            </div>
            {/* Grid Examples */}
            <div className='p-5'>
              <h1 className='text-xl font-semibold'>Grid Examples</h1>
              <ul className='list-decimal px-10'>
                <li>
                  <Link href='services'>Services Section</Link>
                </li>
                <li>
                  <Link href='twitter-summary'>
                    Twitter Monthly Summary Card
                  </Link>
                </li>
                <li>
                  <Link href='smd'>Social Media Dashboard</Link>
                </li>
              </ul>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}
