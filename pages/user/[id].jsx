import React from 'react'
import SideBar from '../../components/Layout/SideBar'

function User() {
  return (
    <section className='flex'>
      <div className='w-1/5 h-screen bg-[#eee] flex justify-center pt-28'>
        <SideBar />
      </div>
      <div></div>
    </section>
  )
}

export default User