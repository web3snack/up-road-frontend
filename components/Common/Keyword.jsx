import React, { useState } from 'react'

const Keyword = ({ name, id, tagList, setTagList }) => {

  const [checked, setChecked] = useState(false);
  // console.log(checked)

  

  const selectKeyword = () => {
    console.log(" ")
  }

  const changeState = () => {

    if(checked === false && tagList.length <= 5) {
      setTagList(tagList.concat({
        id,
        name
      }))
      setChecked(true)
    } else {
      setTagList(tagList.filter((tag) => tag.name !== name))
      setChecked(false)
    }
    console.log(checked)
    console.log(tagList)
  }

  return (
      <div className={`w-24 py-1 my-2 rounded-md mx-2 flex justify-center border-2 border-transparent bg-[#ccc] hover:cursor-pointer ${checked === true ? "border-[#333]" : null}`} >
        <input id={`selectKeyword${id}`} type="checkbox" onChange={selectKeyword} checked={checked} className="hidden" />
        <label htmlFor={`selectKeyword${id}`} onClick={changeState}>
          <span className='text-md font-semibold text-[#333] hover:cursor-pointer'>
            { name }
          </span>
        </label>
      </div>
  )
}

export default Keyword