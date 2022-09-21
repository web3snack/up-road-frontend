import React from 'react'
import Image from 'next/image'

const TagItem = ({ removeTag, tag }) => {

  const removeTagHandler = () => {
    removeTag(tag.id)
  }

  return (
    <div className='bg-slate-100 px-2 py-1 my-2 rounded-md mx-2'>
      <span className='text-md text-[#333]'>
        { tag.title }
      </span>
      <button id="cancelTag" className='hidden'></button>
      <label htmlFor="cancelTag" className='ml-1 px-1 hover:cursor-pointer hover:bg-slate-200 rounded-xl' onClick={removeTagHandler}>
        <Image 
          src="/assets/Small-Cancel-icon.svg"
          alt="cancel tag"
          width={13}
          height={13}
          />
      </label>
    </div>
  )
}

export default TagItem