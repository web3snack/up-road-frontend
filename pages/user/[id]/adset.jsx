import React from 'react'
import axios from 'axios'
import SideBar from '../../../components/Layout/SideBar'
import Link from 'next/link'
import Image from 'next/image'

const Adset = ({ advertises }) => {  
  console.log(advertises)
  
  return (
    <section className='flex'>
    <div className='w-[300px] mt-12 h-screen bg-[#eee] flex justify-center pt-28 fixed'>
      <SideBar />
    </div>
    <div className='w-full ml-[300px] mt-20'>
      <div className='w-4/5 mx-auto'>
        <div className='text-4xl font-semibold'>ADsets</div>
        <div className='text-md text-[#8899A8]'>Showing my contents $ totall price</div>
      </div>
      <div className='w-5/6 mx-auto mt-20'>
        <table className='w-full'>
          <thead>
            <tr className='bg-[#000] h-12 text-[#fff]'>
              <th className='text-sm font-medium'>Article</th>
              <th className='text-sm font-medium'>Writer</th>
              <th className='text-sm font-medium'>Title</th>
              <th className='text-sm font-medium'>Price</th>
              <th className='text-sm font-medium'>Like</th>
              <th className='text-sm font-medium'>View</th>
              <th className='text-sm font-medium'>Link</th>
              <th className='text-sm font-medium'></th>
            </tr>
          </thead>  
          <tbody>
          { advertises.map((advertise, index) => {
            return (
                <tr className='h-16 border text-sm' key={index}>
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
                      <label htmlFor="reviseTitle" >
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
          })}
            </tbody>
        </table>
      </div>
    </div>
  </section>
  )
}

export default Adset

export async function getServerSideProps() {
  const response = await axios.get("https://4b880c9d-fec7-4b7a-824d-32c94510899f.mock.pstmn.io/user/advertisements");
  const advertises = JSON.parse(JSON.stringify(response.data))
  
  return {
    props: {
      advertises
    }
  }
}