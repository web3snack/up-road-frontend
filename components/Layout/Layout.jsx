import React, { useContext } from 'react'
import Header from './Header'
import SignUpModal from '../Common/SignUpModal'
import { AuthContext } from '../../context/AuthContext'

const Layout = ({ children }) => {

  const { isConnected, showLoginModal, isSignUped } = useContext(AuthContext)
  console.log(showLoginModal)
  return (
    <div className={`relative`}>
      {
        showLoginModal === true
          ? <SignUpModal />
          : null
      }
      <Header />
        { children }
    </div>
  )
}

export default Layout