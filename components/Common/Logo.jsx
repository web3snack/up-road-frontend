import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {


  return (
    <Link href="/">
      <a className='text-xl font-semibold'>
        <div className={`flex itmes-center`}>
          <Image 
            src="/assets/Dark-Logo.svg"
            alt="Logo"
            width={100}
            height={25}
        />
        </div>
      </a>
    </Link>
  )
}

export default Logo