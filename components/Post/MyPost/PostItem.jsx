import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const PostItem = ({ article }) => {
  const id = article.id
  const title = article.title
  const description = article.description
  const keywords = article.keywords
  const createdAt = article.created_at
  const like = article.like

  const router = useRouter()
  const splitUrl = router.asPath.split("/")
  const path = splitUrl[splitUrl.length - 1]

  console.log(article)
  return (
    <Link href={`article/${id}`}>
      <section className='w-full h-auto my-8 shadow-md rounded-lg border hover:cursor-pointer p-4 hover:bg-[#eee] duration-200'>
        <div className='px-5'>
          <div className='w-full mx-auto flex justify-between'>
            <div className='text-xl font-semibold text-[#3B454E]'>{title}</div>
            <div className='z-50'>
              {
                path === "mypage"
                 ? (
                  <div className=''>
                    <span className='mr-2 underline hover:underline-offset-1'>Edit</span>
                    <span className='underline hover:underline-offset-1'>Delete</span>
                  </div>
                  ) : null
              }
              {
                path === "likepage"
                  ? (
                    <div className='flex justify-center items-center'>
                      <Image 
                        src="/assets/HeartOutline-icon.svg"
                        alt="like"
                        width={20}
                        height={20}
                      />
                      <span className='ml-1'>{like}</span>
                    </div>
                  ) : null
              }
            </div>
          </div>
          <p className='my-4 mx-4 text-sm'>{description}</p>
          <div className='flex justify-between items-center'>
            <div className="flex justify-start">
              {
                keywords.map((keyword, index) => {
                  return (
                      <span key={index} className='px-3 mr-3 bg-slate-100 rounded-xl'>{keyword.name}</span>
                  )
                } )
              }
            </div>
            <div className='text-[#ccc] text-sm'>{createdAt.slice(0, 10)}</div>
          </div>
        </div>

      </section>
    </Link>
  )
}

export default PostItem