import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProfileModal = () => {
  return (
    <section>
      <div className='w-80 h-auto py-2 bg-slate-100 border rounded-xl'>
        <div className='flex items-center justify-center'>
          <Image 
            src="/assets/Profile-icon.svg"
            alt="profile"
            width={30}
            height={30}
          />
          <div className='ml-2'>
            <div className='text-md text-right font-semibold'>username</div>
            <div className='text-sm text-[#ccc]'>0x0230fasf0320ras0asf132afsdfasdwk24</div>
          </div>
        </div>
          <Link href={`/user/page`}>
            <div className='flex justify-center items-center py-3 my-1 mx-2 hover:bg-slate-200 duration-200'>
              내 글
            </div>
          </Link>
          <Link href={`/user/page`}>
            <div className='flex justify-center items-center py-3 my-1 mx-2 hover:bg-slate-200 duration-200'>
              좋아요한 글
            </div>
          </Link>
          <Link href={`/user/page`}>
            <div className='flex justify-center items-center py-3 my-1 mx-2 hover:bg-slate-200 duration-200'>
              광고 관리
            </div>
          </Link>
          <Link href={`/user/page`}>
            <div className='flex justify-center items-center py-3 my-1 mx-2 hover:bg-slate-200 duration-200'>
              프로필 설정
            </div>
          </Link>
      </div>
    </section>
  )
}

export default ProfileModal