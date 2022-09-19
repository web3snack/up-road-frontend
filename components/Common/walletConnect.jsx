import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const WalletConnect = () => {

  const { address, isConnected, walletConnect } = useContext(AuthContext)

  return (
    <button onClick={walletConnect} className={`w-40 h-8 border border-[#fff] bg-[#000] rounded-2xl hover:bg-[#fff] hover:border-[#000] hover:text-[#000] duration-200 ont-medium text-md text-[#fff] ${ isConnected ? "select-none" : null}`}>
      {isConnected
        ? <span className='select-none'>wallet connected</span>
        : <span>wallet connect</span>}
    </button>
  )
}

export default WalletConnect