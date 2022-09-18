import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const WalletConnect = () => {

  const { address, isConnected, walletConnect } = useContext(AuthContext)

  return (
    <div className='flex items-center px-4 border-2 border-[#fff] bg-[#000] rounded-2xl hover:bg-[#fff] hover:border-[#000] duration-200'>
      <button onClick={walletConnect} className="font-semibold text-md text-[#fff] hover:text-[#000]">
        {isConnected
         ? <span>connected</span>
         : <span>wallet connect</span>}
      </button>
    </div>
  )
}

export default WalletConnect