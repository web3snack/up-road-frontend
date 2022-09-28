import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'

const SignInModal = () => {

  const { address, isConnected, isSignUped, setToken, setIsSignUped, showLoginModal, setShowLoginModal } = useContext(AuthContext)
  const [ nickName, setNickname ] = useState("")

  const getNickname = (event) => {
    setNickname(event.target.value)
  }

  const changeModalState = () => {
    setShowLoginModal(false)
  }

  const signUp = async() => {
    const user = {
      address,
      nickName
    }

    console.log(user)

    await axios.post(`${process.env.API_URL}/auth/signup`, {
        account_address: user.address,
        nickname: user.nickName
  }) 
      .then((response) => {
        console.log(response)
        const accessToken = response.data.accessToken
        setToken(accessToken)
        setIsSignUped(true)
        setShowLoginModal(false)
      })
      .catch((error) => {
        setIsSignUped(false)
        setShowLoginModal(true)
      })
  }


  return (
    <div className={`absolute top-1/2 transform -translate-y-3 left-1/2 transform -translate-x-1/2 border w-[400px] h-[300px] rounded-xl bg-[#eee] z-50`}>
      <div className="w-full flex justify-center my-6">
        <span className="text-xl text-[#333] font-semibold">SIGN UP</span>
      </div>
      <div className="w-4/5 mx-auto">
        <input type="text" className='block mt-4 w-full py-2 px-1 rounded-lg' placeholder="Write your nickname" onChange={getNickname} />
        <input type="text" value={address} className="block mt-3 w-full py-2 px-1 rounded-lg" readOnly  />
        <div className="flex justify-center my-8">
          <button className="border border-[#333] px-5 pt-1 pb-2 rounded-md text-[#000] hover:bg-[#fff] hover:text-[#000] duration-200 mr-3" onClick={signUp}>sign up</button>
          <button className="border border-[#333] px-5 pt-1 pb-2 rounded-md text-[#000] hover:bg-[#fff] hover:text-[#000] duration-200" onClick={changeModalState}>cancel</button>
        </div>
      </div>
    </div>
  )
}

export default SignInModal