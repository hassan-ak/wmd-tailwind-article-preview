import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    // Main container
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
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
        </div>
      </div>
    </div>
  );
}
