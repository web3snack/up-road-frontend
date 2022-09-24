import React from 'react'

const AdvertisementCreated = ({ advertise }) => {
  return (
    <section className='w-[800px] h-auto border flex justify-between items-center px-4 py-3 rounded-xl'>
      <div className='w-2/3'>
        <div>title</div>
        <div>{advertise.link}</div>
      </div>
      <div className='flex mx-2 ml-4'>
        <div className='mx-2 px-3 py-1 bg-[#ccc] rounded-2xl'>{advertise.current_price}</div>
        <div className='mx-2 px-5 py-1 bg-[#eee] rounded-2xl'>BUY</div>
      </div>
    </section>
  )
}

export default AdvertisementCreated