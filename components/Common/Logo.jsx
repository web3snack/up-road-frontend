import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const Logo = () => {

  const { theme, setTheme } = useTheme()

  return (
    <Link href="/">
      <a className='text-xl font-semibold'>
        <div className={`flex itmes-center ${theme === 'light' ? "visible" : "hidden"}`}>
          <Image 
            src="/assets/Dark-Logo.svg"
            alt="Logo"
            width={100}
            height={25}
        />
        </div>
        <div className={`flex itmes-center ${theme === 'light' ? "hidden" : "visible"}`}>
          <Image 
            src="/assets/White-Logo.svg"
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