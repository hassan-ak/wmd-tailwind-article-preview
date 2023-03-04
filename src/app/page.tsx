import React from 'react';
import profileImage from '../../public/profile1.png';
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
      </div>
    </div>
  );
}
