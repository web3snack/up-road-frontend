import { createContext, useState } from "react";
import Web3Modal from 'web3modal'
import axios from "axios";
import { ethers } from 'ethers'
import { providerOptions } from '../context/walletConnect/providerOptions'


// initial state
const INITIAL_STATE = {
  address: "DEFAULT_ADDRESS",
  isConnected: false,
  walletConnect() {},
}

export const AuthProvider = ({ children }) => {

  const [address, setAddress] = useState(undefined)
  const [isConnected, setIsConnected] = useState(false)
  const [isSignUped, setIsSignUped] = useState(false)
  const [token, setToken] = useState("")
  const [showLoginModal, setShowLoginModal] = useState(false)

  const walletConnect = async() => {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions
      })
  
      const web3ModalInstance = await web3Modal.connect()
      const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance)
      const walletAddress = web3ModalProvider.provider.selectedAddress
  
      // console.log('web3ModalInstance', web3ModalInstance)
      // console.log('web3ModalProvider', web3ModalProvider)
      console.log('address', walletAddress)
      setAddress(walletAddress)
      setIsConnected(true)

      const isSignIned = checkWalletSinIn(walletAddress)
      console.log('isConnected', isConnected)

      if(isSignIned === true) {
        setIsSignUped(true)
        setShowLoginModal(true)
        console.log('isSignuped?', isSignUped)
      } else if(isSignIned === false) {
        setIsSignUped(false)
        setShowLoginModal(true)
        console.log('isSignuped?', isSignUped)
      }
    } catch(error) {
      console.log(error)
    }
  }
 
  const checkWalletSinIn = async (walletAddress) => {
    const apiUrl = `${process.env.API_URL}/auth/${walletAddress}`
    console.log(apiUrl)
    if(walletAddress !== "undefined") {
      const response = await axios.get(apiUrl)
      console.log('isSignIned?', response)
    }
  }


  return (
    <AuthContext.Provider value={{ address, isConnected, isSignUped, token, showLoginModal, setShowLoginModal, setToken, setIsSignUped, walletConnect}}>
      { children }
    </AuthContext.Provider>
  )
}

export const AuthContext = createContext(INITIAL_STATE)
