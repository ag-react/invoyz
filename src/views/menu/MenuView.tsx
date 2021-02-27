import React from 'react';
import Image from 'next/image'

function MenuView() {
  return (
    <div className="w-full h-full flex flex-row justify-between bg-indigo-dark lg:flex-col lg:rounded-tr-2xl lg:rounded-br-2xl">
      <div className="h-full w-20 lg:h-20 lg:w-full">
        <Image
          src="/logo.png"
          alt="Logo"
          width="100%"
          height="100%" />
      </div>

      <div className="flex flex-row lg:flex-col">
        <div className="h-full w-20 lg:h-20 lg:w-full flex items-center justify-center">
          <Image
            src="/assets/icon-moon.svg"
            alt="Profile avatar"
            width="18px"
            height="18px"
            className="rounded-full"/>
        </div>
        <div className="w-px lg:w-full h-full lg:h-px bg-divider"></div>
        <div className="h-full w-20 lg:h-20 lg:w-full flex items-center justify-center">
          <Image
            src="/assets/image-avatar.jpg"
            alt="Profile avatar"
            width="32px"
            height="32px"
            className="rounded-full"/>
        </div>
      </div>
    </div>
  )
}

export default MenuView;
