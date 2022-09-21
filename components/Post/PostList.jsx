import React, { useRef, useEffect } from 'react'
import PostItem from './PostItem'
import Image from 'next/image'

const PostList = ({ setLinkHandler, setDescriptionHandler, removeContent, contentList, setContentList }) => {

  const dragItem = React.useRef(null)
  const dragOverItem = React.useRef(null)

  useEffect(() => {
    handleSort()
  }, [])

  const handleSort = () => {
    let contentItems = [...contentList]
    const draggedItemContent = contentItems.splice(dragItem.current, 1)[0]
    contentItems.splice(dragOverItem.current, 0, draggedItemContent)
    dragItem.current = null
    dragOverItem.current = null
    setContentList(contentItems)
    console.log(contentItems)
  }
  

  return (
    <div>
      {contentList && contentList.map((content, index) => {
        return (
          <div key={index} 
            draggable
            onDragStart={() => dragItem.current = index}
            onDragEnter={() => dragOverItem.current = index}
            onDragOver={(event) => event.preventDefault()}
            className="w-5/6 mx-auto flex items-center ">
            <div
              className='w-[30px] h-[30px] rounded-xl hover:cursor-pointer hover:shadow flex justify-center items-center'
              onDragEnd={handleSort}>
              <Image 
              src="/assets/Drag-icon.svg"
              alt='drag'
              width={23}
              height={23}
              />
            </div>
            <PostItem 
              setLinkHandler={setLinkHandler}
              setDescriptionHandler={setDescriptionHandler}
              removeContent={removeContent}
              content={content}
            />
          </div>
        )
      })}
    </div>
  )
}

export default PostList