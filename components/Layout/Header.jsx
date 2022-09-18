import React from 'react'
import Link from 'next/link'
import Logo from '../Common/Logo'

const Header = () => {
  return (
    <div className='w-full h-auto shadow'>
      <div className='w-4/5 h-12 mx-auto flex justify-between items-center'>
        <Logo />
        <div>
          <nav>
            <Link href="">
              <a>create</a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header