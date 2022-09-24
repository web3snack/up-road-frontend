import React, { useState, useEffect } from 'react'
import PostList from '../components/Post/PostList'
import TagList from '../components/Post/Tags/TagList';
import Advertisement from '../components/Advertisement/AdvertisementInput';
import Image from 'next/image'
import axios from 'axios';

function Create() {
  const [linkHandler, setLinkHandler] = useState("");
  const [descriptionHandler, setDescriptionHandler] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("")
  const [tagValue, setTagValue] = useState("");
  const [contentList, setContentList] = useState([]);
  const [tagList, setTagList] = useState([]);


  useEffect(() => {
    changeContentList()
  }, [])

  const setArticleTitle = (event) => {
    setTitleValue(event.target.value)
  }

  const setArticleDescription = (event) => {
    setDescriptionValue(event.target.value)
  }

  const changeContentList = () => {
    const content = {
      id: contentList.length + 1,
      link: "DEFAULT_LINK",
      description: "DEFAULT_DESCRIPTION"
    }

    setContentList(contentList.concat(content))
    console.log(contentList)

  }

  const removeContent = (id) => {
    setContentList(contentList.filter(contentList => contentList.id !== id))
  }

  const removeTag = (id) => {
    setTagList(tagList.filter(tagList => tagList.id !== id))
  }

  const addTagHandler = (event) => {
    setTagValue(event.target.value)

    if (event.key == "Enter") {
      addTagItem()
    }
  }

  const addTagItem = () => {
    if (tagValue.length > 0) {
      const tag = {
        id: tagList.length + 1,
        title: tagValue
      }
      setTagList(tagList.concat(tag))
      setTagValue("")
      console.log(tagList)
    }
  }

  const createArticle = async() => {

    const article = {
      title: titleValue,
      description: descriptionValue,
      keywords: tagList,
      level: 1,
      blocks: contentList,
      public: true
    }

    const response = await axios.post("https://4b880c9d-fec7-4b7a-824d-32c94510899f.mock.pstmn.io/article", article)
    console.log(response)
    // console.log(article)
  }

  return (
    <main className='relative w-full mx-auto'>
      <div className='w-[900px] h-screen mx-auto'>
        <section className='pt-40'>
          <input type="text" className='w-full h-12 text-4xl px-2 py-10 font-semibold outline-none placeholder:font-bold border-2 border-transparent rounded-xl placeholder:text-[#eee] focus:border-[#eee]' placeholder='Untitled' maxLength={50} required onChange={setArticleTitle} />
          <textarea name="description" maxLength={280} className="w-full h-auto mt-8 px-2 py-3px-2 py-3 resize-none outline-none text-xl border-2 border-transparent focus:border-[#eee] rounded-xl placeholder:font-semibold placeholder:text-[#eee]" rows={5} placeholder="write your post description" onChange={setArticleDescription}></textarea>
          <div className='mt-4 flex'>
            <input type="text" value={tagValue} className='w-4/5 h-8 px-2 py-5 placeholder:text-[#eee] outline-none text-xl border-2 border-transparent focus:border-[#eee] rounded-xl' placeholder='write your post keyword' onChange={addTagHandler} onKeyDown={addTagHandler} />
            <button className='w-1/5 border-2 bg-[#000] text-[#fff] rounded-xl hover:bg-[#fff] hover:text-[#000] duration-200' onClick={addTagItem}>Add Tag</button>
          </div>
          <div className='my-16'>
            {
              tagList.length > 0 
               ? (
                <TagList 
                  removeTag={removeTag}
                  tagList={tagList}
                />
               )
               : (
                <div className='flex justify-center items-center'>
                  <span className='text-xl text-[#ccc]'>No tags entered</span>
                </div>
               )
            }

          </div>
        </section>
        <section className='mt-8 border-t pb-20'>
          <PostList 
            setLinkHandler={setLinkHandler}
            setDescriptionHandler={setDescriptionHandler}
            removeContent={removeContent}
            setContentList={setContentList}
            contentList={contentList} />
          <div className='w-5/6 h-16 mx-auto mt-12 border flex justify-center items-center border-dashed border-[#ccc] rounded-xl bg-[#eee] opacity-50 hover:opacity-90'>
            <button id='generate' className='hidden'></button>
            <label htmlFor="generate" onClick={changeContentList}>
              <div className='hover:cursor-pointer'>
                <Image 
                  src="/assets/Generate-icon.svg"
                  alt="Generate"
                  width={35}
                  height={35}
                />  
              </div>
            </label>
          </div>
        </section>
        <section className='flex justify-center pb-20'>
          <Advertisement />
      </section>
      </div>
      <section className="fixed bottom-0 left-0 w-full bg-[#555555]">
        <div className='w-4/5 h-12 mx-auto flex justify-end items-center'>
          <button className='mx-2 px-8 text-lg bg-[#D9D9D9] rounded-2xl'>Private</button>
          <button className='mx-2 px-8 text-lg bg-[#D9D9D9] rounded-2xl' onClick={createArticle}>Public</button>
        </div>
      </section>
    </main>
  )
}

export default Create