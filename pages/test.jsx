import axios from 'axios'
import React, { useEffect } from 'react'
import SignInModal from '../components/Common/SignUpModal'
// import EditAdvertisementModal from '../components/Common/EditAdvertisementModal'

const test = () => {

  useEffect(() => {
    testURL
  }, [])
  const testURL = async () => {
    const response = await axios.get(`${process.env.API_URL}/keyword`)
    console.log(response)
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <button onClick={testURL}></button>
      <SignInModal />
      {/* <EditAdvertisementModal /> */}
    </div>
  )
}

export default test