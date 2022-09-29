import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import CreatedPostItem from '../../components/Post/CreatedPostItem'
import AdvertisementCreated from '../../components/Advertisement/AdvertisementCreated'
import Link from 'next/link'

function Article({ article }) {

  const id = article.id
  const title = article.title
  const description = article.description 
  const keywords = article.keywords 
  const blocks = article.blocks
  const level = article.level
  const like = article.like
  const createdAt = article.created_at
  const writer = article.writer
  const advertise = article.advertise

  console.log(article)

  return (
    <main className='w-[800px] mx-auto'>
      <section className='pt-20'>
        <div className='flex justify-end items-center'>
          <Image 
            src="/assets/Heart-icon.svg"
            alt='like'
            width={15}
            height={15}
          />
          <span className='text-[#333] ml-1'>{like}</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-4xl font-semibold text-[#3B454E]'>{title}</span>
        </div>
        <div className='my-4 text-md text-[#3B454E]'>{description}</div>
        <div className='flex justify-end items-center'>
            <span className='text-sm text-[#ccc] mr-2'>Selected by</span>
            <Image 
              src="/assets/Profile-icon.svg"
              alt='onwer'
              width={20}
              height={20} />
            <span className='text-md ml-1'>{writer.nickname}</span>
        </div>
        <div className='mt-2 pt-8 flex justify-between flex-wrap border-t border-[#D3DFEA]'>
          <div className='mr-3'>
            {keywords.map((keyword, index) => {
              return (
                <span key={index} className='px-3 py-1 mr-2 bg-slate-100 rounded-lg font-semibold'>{keyword.name}</span>
              )
            })}
          </div>
          <div className='text-md font-semibold'>Level {level}</div>
        </div>
      </section>
      <section className='mt-20'>
        <CreatedPostItem />
        <CreatedPostItem />
        <CreatedPostItem />
        <CreatedPostItem />
        <div className='my-8 flex justify-end text-[#ccc]'>{createdAt.slice(0, 10)}</div>
      </section>
      <section>
        <AdvertisementCreated advertise={advertise} />
      </section>
      <section className='mt-12 pt-8 border-t flex justify-center items-center'>
        {
          article.previous_article
           ? (
              <Link href={`/article/${article.previous_article.id}`}>
              <div className='w-1/2 py-3 px-4 rounded-lg mr-2 border flex justify-between items-center hover:cursor-pointer hover:bg-[#eee]'>
                <Image 
                  src="/assets/Left-icon.svg"
                  alt="previous article"
                  width={20}
                  height={20}
                />
                <div className='text-right rounded-lg'>
                  <div className='text-sm text-[#ccc] font-semibold'>Previous</div>
                  <div className='font-semibold text-[#3B454E]'>{article.previous_article.title}</div>
                </div>
              </div>
            </Link>
           ) : (
            <div className='w-1/2 py-3 px-4 rounded-lg mr-2 border flex justify-between items-center hover:cursor-pointer hover:bg-[#eee] opacity-20'>
              <Image 
                src="/assets/Cancel.svg"
                alt="previous article"
                width={20}
                height={20}
              />
              <div className='text-right rounded-lg'>
                <div className='text-sm text-[#ccc] font-semibold'>Previous</div>
                <div className='font-semibold text-[#3B454E]'>이전 게시물이 없습니다</div>
              </div>
            </div>
           )
        }
        {
          article.next_article 
           ? (
            <Link href={`/article/${article.next_article.id}`}>
              <div className='w-1/2 rounded-lg mr-2 py-3 px-4 border flex justify-between items-center hover:cursor-pointer hover:bg-[#eee]'>
                  <div className='text-left rounded-lg'>
                    <div className='text-sm text-[#ccc] font-semibold'>Next</div>
                    <div className='font-semibold text-[#3B454E]'>{article.next_article.title}</div>
                  </div>
                  <Image 
                    src="/assets/Right-icon.svg"
                    alt="previous article"
                    width={20}
                    height={20}
                  />
                </div>
              </Link>
           ) : (
            <div className='w-1/2 py-3 px-4 rounded-lg mr-2 border flex justify-between items-center hover:cursor-pointer hover:bg-[#eee] opacity-20'>
              <Image 
                src="/assets/Cancel.svg"
                alt="previous article"
                width={20}
                height={20}
              />
              <div className='text-right rounded-lg'>
                <div className='text-sm text-[#ccc] font-semibold'>Next</div>
                <div className='font-semibold text-[#3B454E]'>다음 게시물이 없습니다</div>
              </div>
            </div>
           )
        }

      </section>
    </main>
  )
}

export default Article

const getSelectedArticle = async (id) => {
  const response = await axios.get(`${process.env.API_URL}/article?id=${id}`)
  const article = JSON.parse(JSON.stringify(response.data))
  return article
}

export const getStaticProps = async(context) => {
  const id = context.params.id
  const articleDetail = await getSelectedArticle(id)
  return {
    props: {
      article: articleDetail
    }
  }
}

export const getStaticPaths = async(context) => {
  const id = context.param.id
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}