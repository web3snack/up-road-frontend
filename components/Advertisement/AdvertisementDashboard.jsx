import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AdvertisementDashboard = ({ advertise, setShowModal }) => {
  return (
    <tr className='h-16 border text-sm'>
      <th className='text-[#ccc] font-normal'>
        <Link href={`/article/${advertise.article_id}`}>
          <span className='hover:cursor-pointer'>#{advertise.article_id}</span>
        </Link>
      </th>
      <th className='font-normal'>{advertise.writer}</th>
      <th className='font-normal'>
        <div>
          <span>{advertise.title}</span>
        </div>
      </th>
      <th className='font-normal'>
        <span>{advertise.current_price}</span>
      </th>
      <th className='font-normal'>{advertise.like}</th>
      <th className='font-normal'>{advertise.hit}</th>
      <th className='font-normal text-[#ccc]'>
        <Link href={advertise.link}>
          {advertise.link}
        </Link>
      </th>
      <th className='flex items-center'>
        <button id="reviseTitle" className='hidden'></button>
          <label htmlFor="reviseTitle" onClick={() => setShowModal(true)}>
          <div className='flex items-center px-2 py-2 mt-4 mr-2 rounded-md hover:cursor-pointer hover:shadow'>
            <Image 
              src="/assets/Edit-icon.svg"
              alt="edit title"
              width={15}
              height={15}
            />                   
            </div>
          </label>
        <button id="reviseTitle" className='hidden'></button>
          <label htmlFor="reviseTitle">
            <div className='flex itmes-center px-2 py-2 mt-4 rounded-md hover:cursor-pointer hover:shadow'>
              <Image 
                src="/assets/Trashcan-icon.svg"
                alt="edit title"
                width={15}
                height={15}
              />
            </div>
          </label>
      </th>
    </tr>
  )
}

export default AdvertisementDashboard