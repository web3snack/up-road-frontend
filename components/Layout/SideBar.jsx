import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SideBar = () => {

  return (
    <section className='w-full'>
      <Link href={`/user/id/mypage`}>
        <div className='flex mt-2 justify-center items-center hover:bg-[#ccc] hover:cursor-pointer'>
          <div className='w-32 py-3 flex items-center'>
            <Image 
              src="/assets/Book-icon.svg"
              alt="my page"
              width={25}
              height={25}
            />
            <a className='text-lg ml-2 font-semibold'>My page</a>
          </div>
        </div>
      </Link>
      <Link href={`/user/id/likepage`}>
        <div className='mt-2 flex justify-center items-center hover:bg-[#ccc] hover:cursor-pointer'>
          <div className='w-32 py-3 flex items-center'>
            <Image 
              src="/assets/HeartOutline-icon.svg"
              alt="like"
              width={25}
              height={25}
            />
            <a className='text-lg ml-2 font-semibold'>Like Page</a>
          </div>  
        </div>
      </Link>
      <Link href={`/user/id/adset`}>
        <div className='flex mt-2 justify-center items-center hover:bg-[#ccc] hover:cursor-pointer'>
          <div className='w-32 py-3 flex items-center'>
            <Image 
              src="/assets/Graph-icon.svg"
              alt="like"
              width={25}
              height={25}
            />
            <a className='text-lg ml-2 font-semibold'>Adset</a>
          </div>
        </div>
      </Link>
      <Link href={`/user/id/profile`}>
        <div className='flex mt-2 justify-center items-center hover:bg-[#ccc] hover:cursor-pointer'>
          <div className='w-32 py-3 flex items-center'>
            <Image 
              src="/assets/Profile-icon.svg"
              alt="like"
              width={25}
              height={25}
            />
            <a className='text-lg ml-2 font-semibold'>Profile</a>
          </div>
        </div>
      </Link>
    </section>
  )
}

export default SideBar