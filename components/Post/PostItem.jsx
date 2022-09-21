import React, { useState } from 'react'
import SlideToggle from "react-slide-toggle"
import Image from 'next/image'

const PostItem = ({ setLinkHandler, setDescriptionHandler, removeContent, content }) => {

  const [isToggled, setIsToggled] = useState(false);

  const changeToggleState = () => {
    isToggled === true
      ? setIsToggled(false)
      : setIsToggled(true)
  }

  const getInputLink = (event) => {
    setLinkHandler(event.target.value)
  }

  const getInputDescription = (event) => {
    setDescriptionHandler(event.target.value)
  }

  const removeContentById = () => {
    removeContent(content.id)
  }

  return (
    <div className='relative w-full  h-auto mx-auto my-8 flex items-center'>
      <SlideToggle>
        {({ toggle, setCollapsibleElement }) => (
          <div className="my-collapsible px-[10px] py-2 rounded-xl w-full border">
            <div className='flex items-center'>
              <button id='toggle' className='hidden'></button>
              {content.id}
              <label htmlFor="toggle" onClick={toggle} >
                <div className={`w-[35px] h-[35px] flex justify-center border border-transparent items-center rounded-2xl hover:border-[#eee] hover:cursor-pointer ${isToggled === true ? "rotate-90" : null} duration-100`} onClick={changeToggleState}> 
                  <Image
                  src="/assets/Right-Arrow-icon.svg"
                  alt="show description"
                  width={20}
                  height={20}
                  />
                </div>
              </label>
              <input type="text" className='block w-full pl-2 text-lg placeholder:text[#eee] outline-none' placeholder='Link' onChange={getInputLink} />
            </div>
            <div className="my-collapsible__content" ref={setCollapsibleElement}>
              <textarea name="description" rows="4" className='block w-full mt-2 pl-[42px] text-lg placeholder:text[#eee] outline-none resize-none' placeholder='Description' onChange={getInputDescription}/>
            </div>
          </div>
        )}
      </SlideToggle>
      <div className='absolute top-0 transform translate-y-2 -right-10'>
        <button id="delete" className='hidden'></button>
        <label htmlFor="delete" onClick={removeContentById}>
          <div className='w-[30px] h-[30px] flex justify-center items-center hover:cursor-pointer hover:shadow rounded-3xl'>
            <Image 
              src="/assets/Cancel-icon.svg"
              alt="delete link"
              width={15}
              height={15}
            />
          </div>
        </label>
      </div>
    </div>
  )
}

export default PostItem