import React, { useState } from 'react'
import axios from 'axios'
import SideBar from '../../../components/Layout/SideBar'
import AdvertisementDashboard from '../../../components/Common/AdvertisementDashboard'
import EditAdvertisementModal from '../../../components/Common/EditAdvertisementModal'

const Adset = ({ advertises }) => {  

  const [showModal, setShowModal] = useState(false);

  return (
    <section className={`relative h-screen flex ${showModal === true ? "select-none bg-[#eee] opacity-40" : null}`}>
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
              <AdvertisementDashboard 
                key={index}
                advertise={advertise}
                setShowModal={setShowModal}
              />
            )
          })}
            </tbody>
        </table>
      </div>
    </div>
    {
      showModal === true 
        ? (
          <EditAdvertisementModal 
            setShowModal={setShowModal}
          />
        ) : null
    }
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