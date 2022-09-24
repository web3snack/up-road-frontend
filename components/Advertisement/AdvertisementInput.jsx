import React from 'react'

const AdvertisementInput = () => {
  return (
    <section className='w-[800px] h-auto border flex justify-between items-center px-4 py-3 rounded-xl'>
      <div className='w-2/3'>
        <input className='block text-md text-[#ccc] outline-none' placeholder='title' />
        <input className='block w-full text-lg text-[#333] outline-none pt-2 placeholder:text-[#ccc]' placeholder='Write Advertise Link' />
      </div>
      <div className='flex mx-2 ml-4'>
        <div className='mx-2 px-3 py-1 bg-[#ccc] rounded-2xl'>0.01ETH</div>
        <div className='mx-2 px-5 py-1 bg-[#eee] rounded-2xl'>BUY</div>
      </div>
    </section>
  )
} 

export default AdvertisementInput