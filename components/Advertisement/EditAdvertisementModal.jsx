import React, { useState } from 'react'

const EditAdvertisementModal = ({ setShowModal }) => {

  const [titleInput, setTitleInput] = useState("");
  const [linkInput, setLinkInput] = useState("")

  const editAdvertisement = async() => {
    const response = await axios.patch(`${process.env.API_URL}/advertisement`, {
      title: titleInput,
      link: linkInput
    })
    console.log(response)
  }

  return (
    <section className='absolute top-1/2 left-1/2 transform -translate-y-1/2 transform -translate-x-1/2 shadow w-[400px] h-[360px] border rounded-xl bg-[#fff] z-50'>
      <div className='mt-8 w-4/5 mx-auto flex justify-start items-center'>
        <span className='text-xl font-semibold text-[#3B454E]'>Edit Advertisement</span>
      </div>
      <div className='w-4/5 mx-auto'>
        <div className='mt-8'>
          <span className='text-base text-[#3B454E] font-medium'>Title</span>
          <input type="text" className='block w-full border mt-1 py-1 pl-2 outline-none font-sm rounded-md placeholder:text-sm' placeholder='Edit Title' required />
        </div>
        <div className='mt-5'>
          <span className='text-base text-[#3B454E] font-medium'>Link URL</span>
          <input type="url" className='block w-full border mt-1 py-1 pl-2 outline-none font-sm rounded-md placeholder:text-sm' placeholder='Edit Link' required />
        </div>
        <div className='mt-8 flex justify-end items-center'>
          <button className='border py-[6px] px-6 mr-1 rounded-lg hover:bg-[#ccc]'>Save</button>
          <button className='border py-[6px] px-4 rounded-lg text-slate-500 bg-[#eee] hover:bg-[#ccc]' onClick={() => {setShowModal(false)}}>Cancel</button>
        </div>
      </div>
    </section>
  )
}

export default EditAdvertisementModal