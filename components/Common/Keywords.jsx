import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Keyword from '../Common/Keyword'

const Keywords = ({ tagList, setTagList }) => {

  const [keywordList, setKeywordList] = useState([])

  useEffect(() => {
    getKeywordList()
  }, [])

  const getKeywordList = () => {
    axios.get(`${process.env.API_URL}/keyword`)
      .then((response) => {
        // console.log(response.data)
        setKeywordList(response.data)
        console.log(keywordList)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='w-4/5 mx-auto h-[120px] flex flex-wrap justify-center items-center my-3'>
      {
        keywordList && keywordList.map((keyword, index) => {
          return (
            <div key={index}>
              <Keyword name={keyword.name} id={keyword.id} tagList={tagList} setTagList={setTagList} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Keywords