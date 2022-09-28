import React from 'react'
import axios from 'axios'
import SideBar from '../../../components/Layout/SideBar'
import PostItem from '../../../components/Post/MyPost/PostItem'

const Likepage = ({ articles }) => {
  console.log(articles)
  return (
    <section className='flex'>
    <div className='w-[300px] mt-12 h-screen bg-[#eee] flex justify-center pt-28 fixed'>
      <SideBar />
    </div>
    <div className='w-full ml-[300px] mt-20'>
        <div className='w-4/5 mx-auto'>
          <div className='text-4xl font-semibold text-[#3B454E]'>Like Page</div>
          <div className='text-md text-[#8899A8]'>Content I liked</div>
          <div className='text-[#ccc] text-right'>Total: {articles.length}</div>
        </div>
        <div className='w-4/5 mx-auto mt-16'>
          {
            articles.map((article, index) => {
              return (
                <PostItem key={index} article={article}/>
              )
            })
          }
        </div>
      </div>
  </section>
  )
}

export default Likepage

export async function getServerSideProps() {
  const response = await axios.get(`${process.env.API_URL}/user/articles/like`);
  const articles = JSON.parse(JSON.stringify(response.data))
  
  return {
    props: {
      articles
    }
  }
}