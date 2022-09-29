import axios from 'axios'
import React from 'react'
import SideBar from '../../../components/Layout/SideBar'
import PostItem from '../../../components/Post/MyPost/PostItem'

const Mypage = ({ articles }) => {

  console.log(articles)
  return (
    <section className='flex'>
      <div className='w-[300px] mt-12 h-screen bg-[#eee] flex justify-center pt-28 fixed'>
        <SideBar />
      </div>
      <div className='w-full ml-[300px] mt-20'>
        <div className='w-4/5 mx-auto'>
          <div className='text-4xl font-semibold text-[#3B454E]'>My page</div>
          <div className='text-md text-[#8899A8]'>Showing my content</div>
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

export default Mypage

export async function getServerSideProps() {
  const response = await axios.get(`${process.env.API_URL}/user/articles`);
  const articles = JSON.parse(JSON.stringify(response.data))
  
  return {
    props: {
      articles
    }
  }
}