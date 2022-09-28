import React, { useState, useContext } from 'react'
import Link from 'next/link'
import Logo from '../Common/Logo'
import Image from 'next/image'
import { useRouter } from 'next/router'
import WalletConnect from '../Common/walletConnect'
import ProfileModal from '../Common/profileModal'
import { AuthContext } from '../../context/AuthContext'
import ModeChangeToggle from './ModeChangeToggle'
import { useTheme } from 'next-themes'

const Header = () => {

  const router = useRouter()
  const path = router.pathname

  const { theme, setTheme } = useTheme()

  const { isConnected } = useContext(AuthContext)
  const [ showModal, setShowModal ] = useState(false)

  const changeModalState = () => {
    showModal
     ? setShowModal(false)
     : setShowModal(true)
  }

  return (
    <div className='w-full h-auto shadow fixed z-50'>
      <div className={`relative w-full px-20 h-12 mx-auto flex justify-between items-center ${theme === 'light' ? 'bg-[#fff]' : 'bg-[#000]'}`}>
        <Logo />
        <nav className='flex itmes-center'>

          {isConnected
            ? 
                <div className='flex items-center mx-4 hover:cursor-pointer'>
                  {
                    path !== "/create"
                      ? (
                        <Link href="/create">
                          <a className='px-6 py-[2px] pb-[3px] border border-[#fff] rounded-2xl bg-[#000] text-[#fff] hover:border-[#000] hover:bg-[#fff] hover:text-[#000] duration-200 mx-2'>create</a>
                        </Link> 
                      ): null
                  }
                  <div className="mt-2" onClick={changeModalState}>
                    {
                      theme === 'light' 
                       ? (
                        <Image 
                          src="/assets/black-user.svg"
                          alt="profile"
                          width={27}
                          height={27}
                        />
                       ) : (
                        <Image 
                          src="/assets/white-user.svg"
                          alt="profile"
                          width={27}
                          height={27}
                        />
                       )

                    }

                  </div>
                </div>
            : <WalletConnect />

          }
        </nav>
        {showModal
         ? ( 
         <div className='absolute top-12 right-2 z-50'>
            <ProfileModal />
         </div> )  
         : null }
         <ModeChangeToggle />
      </div>
    </div>
  )
}

export default Header