import React from 'react'
import TagItem from './TagItem'

const TagList = ({ removeTag, tagList }) => {
  return (
    <div className='flex flex-wrap justify-center items-center my-3'>
      {
        tagList && tagList.map((tag, index) => {
          return (
            <div key={index}>
              <TagItem 
                removeTag={removeTag}
                tag={tag}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default TagList