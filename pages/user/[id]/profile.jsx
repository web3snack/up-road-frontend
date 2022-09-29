import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import SideBar from '../../../components/Layout/SideBar'

const Profile = () => {

  const [userProfile, setUserProfile] = useState({
    account_address: "",
    nickName: "",
    profileImage: "",
    description: ""
  })

  const [nickName, setNickName] = useState("")
  const [description, setDescription] = useState("")
  const [profileImage, setProfileImage] = useState("")

  useEffect(() => {
    getUserProfile()
  }, [])

  const changeNickNameState = (event) => {
    setNickName(event.target.value)
  }

  const changeDescriptionState = (event) => {
    setDescription(event.target.value)
  }

  const changeProfileImageState = (event) => {
    setProfileImage(event.target.value)
  }

  const getUserProfile = async () => { 
    const response = await axios.get(`${process.env.API_URL}/user`) 
    console.log('getUserProfile', response)
    setUserProfile({
      account_address: response.data.account_address,
      nickName: response.data.nickname,
      profileImage: response.data.profile_image,
      description: response.data.description
    })
    console.log('userProfile', userProfile)
  }

  const submitUserProfile = async () => {
    if(nickName === "") {
      setNickName(userProfile.nickName)
    }
    if(description === "") {
      setDescription(userProfile.description)
    }

    const response = await axios.patch(`${process.env.API_URL}//user`, {
      account_address: userProfile.account_address,
      nickname: nickName,
      description: description
    })
    console.log(response)
  }


  return (
    <section className='flex'>
      <div className='w-[300px] mt-12 h-screen bg-[#eee] flex justify-center pt-28 fixed'>
        <SideBar />
      </div>
      <div className='w-full ml-[300px] mt-20'>
        <div className='w-4/5 mx-auto'>
          <div className='text-4xl font-semibold'>Profile</div>
          <div className='text-md text-[#8899A8]'>Edit Your Profile</div>
        </div>
        <div className='w-4/5 mx-auto mt-12 flex'>
          <div>
            <input type="file" id="reviseProfileImage" className='hidden' />
            <label htmlFor="reviseProfileImage" onChange={changeProfileImageState}>
              <div className='bg-[#ccc] w-32 h-32 rounded-[50%] flex justify-center items-center hover:cursor-pointer'>
                <Image 
                  src="/assets/Edit-Profile-icon.svg"
                  alt="edit profile"
                  width={20}
                  height={20}
                />
              </div>
            </label>
          </div>
          <div className='mt-4 ml-20 w-full'>
            <input type="text" defaultValue={userProfile.nickName} className='block w-1/2 outline-none border pl-2 py-2 rounded-md text-lg placeholder:text-[#ccc] border-[#eee]' placeholder='Edit your nickname' onChange={changeNickNameState}/>
            <input type="text" value={userProfile.account_address} className='block w-1/2 pl-1 py-1 mt-4 outline-none bg-[#eee] rounded-md' readOnly />
          </div>
        </div>
        <div className='w-4/5 mx-auto mt-12'>
          <textarea className='w-full border border-[#ccc] rounded-lg resize-none pl-1 py-2 outline-none' placeholder='Edit your description' rows={3} defaultValue={userProfile.description} onChange={changeDescriptionState} />
        </div>
        <div className='w-4/5 mx-auto mt-4 flex justify-end'>
          <button className='border px-8 py-2 rounded-lg border-[#000] hover:bg-[#000] hover:text-[#fff] duration-200' onClick={submitUserProfile}>Save</button>
        </div>
      </div>
  </section>
  )
}

export default Profile