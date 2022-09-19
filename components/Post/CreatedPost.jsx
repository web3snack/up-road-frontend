import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CreatedPost = () => {
  return (
    <Link href="/">
      <section className='w-full h-auto my-8 shadow-xl rounded-md hover:cursor-pointer p-4 hover:bg-[#eee] duration-200'>
        <div className='px-5'>
          <div className='w-full mx-auto flex justify-between'>
            <div className='text-xl'>Title</div>
            <div className='flex items-cetner'>
              <span className='mr-2'>user name</span>
              <Image 
                src="/assets/Profile-icon.svg"
                alt='content owner'
                width={25}
                height={25}
              />
            </div>
          </div>
          <p className='my-2'>Description</p>
          <div className='flex justify-between items-center'>
            <span className='px-4 py-1 bg-slate-100 rounded-xl'>Tag</span>
            <div className='text-[#ccc]'>2022/09/20</div>
          </div>
        </div>

      </section>
    </Link>
  )
}

export default CreatedPost