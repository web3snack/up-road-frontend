import React from 'react'
import PostItem from './PostItem'

const PostList = ({ setLinkHandler, setDescriptionHandler, removeContent, contentList }) => {
  return (
    <div>
      {contentList && contentList.map((content, index) => {
        return (
          <div key={index}>
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