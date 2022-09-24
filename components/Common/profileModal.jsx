import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProfileModal = () => {
  return (
    <section>
      <div className='w-48 h-auto py-2 shadow-xl border rounded-md'>
          <Link href={`/user/id/mypage`}>
            <div className='flex justify-center items-center py-3 hover:bg-slate-200 duration-200 hover:cursor-pointer'>
              My page
            </div>
          </Link>
          <Link href={`/user/id/likepage`}>
            <div className='flex justify-center items-center py-3 hover:bg-slate-200 duration-200 hover:cursor-pointer'>
              Like page
            </div>
          </Link>
          <Link href={`/user/id/adset`}>
            <div className='flex justify-center items-center py-3 hover:bg-slate-200 duration-200 hover:cursor-pointer'>
              Adset
            </div>
          </Link>
          <Link href={`/user/id/profile`}>
            <div className='flex justify-center items-center py-3 hover:bg-slate-200 duration-200 hover:cursor-pointer'>
              Profile
            </div>
          </Link>
      </div>
    </section>
  )
}

export default ProfileModal