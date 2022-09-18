import React from 'react'
import Link from 'next/link'
import Logo from '../Common/Logo'
import WalletConnect from '../Common/walletConnect'

const Header = () => {

  return (
    <div className='w-full h-auto shadow'>
      <div className='w-4/5 h-12 mx-auto flex justify-between items-center'>
        <Logo />
        <nav className='flex itmes-center'>
          <Link href="/create">
            <a className='py-2 px-4 rounded-xl hover:shadow duration-200 font-semibold'>create</a>
          </Link>
          <WalletConnect />
        </nav>
      </div>
    </div>
  )
}

export default Header