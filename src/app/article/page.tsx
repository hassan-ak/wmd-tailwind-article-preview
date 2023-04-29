import React from 'react';
import Image from 'next/image';
import profileImage from '../../../public/profile1.png';

export default function Home() {
  return (
    // Main container
    <div className='antialiased'>
      <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-[#F6D365] to-[#FDA085] p-6 sm:p-12'>
        {/* Card Container */}
        <div className='flex max-w-[24rem] flex-col rounded-xl bg-white sm:max-w-xl md:max-w-3xl md:flex-row'>
          {/* Left/Top Image */}
          <div className='basis-2/5 object-cover'>
            <Image
              src='https://res.cloudinary.com/thirus/image/upload/v1632854291/logos/drawers_gr2wn5.jpg'
              alt='Furniture'
              width={650}
              height={650}
              className='h-full w-full rounded-t-xl md:rounded-r-none md:rounded-l-xl'
              priority={true}
            ></Image>
          </div>
          {/* Right/Bottom Description Section */}
          <div className='basis-3/5 p-9'>
            {/* Description Heading*/}
            <h2 className='text-base font-bold leading-snug text-gray-600 sm:text-[1.4rem]'>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h2>
            {/* Description Detail */}
            <p className='mt-3 text-sm text-gray-500'>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I&#39;ve got some simple
              tips to help you make any room feel complete.
            </p>
            {/* Autohor detail */}
            <div className='mt-6 flex items-center leading-none'>
              {/* Author Image */}
              <Image
                src={profileImage}
                alt='Profile Image'
                className='mr-4 h-11 w-11 rounded-full'
                width={500}
                height={500}
              />
              {/* Author Details */}
              <div>
                <p className='text-sm font-bold text-gray-600'>
                  Hassan Ali Khan
                </p>
                <span className='text-sm text-gray-400'>28 Jun 2020</span>
              </div>
              {/* Share Button */}
              <div className='ml-auto flex-shrink-0 rounded-full bg-gray-200 p-3 hover:cursor-pointer'>
                <Image
                  src='https://res.cloudinary.com/thirus/image/upload/v1632854290/logos/icon-share_frvrfu.svg'
                  alt=''
                  width={15}
                  height={15}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
