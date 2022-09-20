import React, { useState, useContext } from 'react'
import Link from 'next/link'
import Logo from '../Common/Logo'
import Image from 'next/image'
import WalletConnect from '../Common/walletConnect'
import ProfileModal from '../Common/profileModal'
import { AuthContext } from '../../context/AuthContext'

const Header = () => {

  const { isConnected } = useContext(AuthContext)
  const [ showModal, setShowModal ] = useState(false)

  const changeModalState = () => {
    showModal
     ? setShowModal(false)
     : setShowModal(true)
  }

  return (
    <div className='w-full h-auto shadow'>
      <div className='relative w-4/5 h-12 mx-auto flex justify-between items-center'>
        <Logo />
        <nav className='flex itmes-center'>
          <Link href="/create">
            <a className='px-4 rounded-xl hover:shadow duration-200 font-semibold'>create</a>
          </Link> 
          <WalletConnect />
          {isConnected
            ? 
                <div className='flex items-center mx-4 hover:cursor-pointer' onClick={changeModalState}>
                  <Image 
                    src="/assets/Profile-icon.svg"
                    alt="profile"
                    width={30}
                    height={30}
                  />
                </div>
            : null 
          }
        </nav>
        {showModal
         ? ( 
         <div className='absolute top-12 right-2 z-50'>
            <ProfileModal />
         </div> )  
         : null }
      </div>
    </div>
  )
}

export default Header