import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CreatedPost = ({ article }) => {
  const id = article.id
  const title = article.title
  const description = article.description
  const keywords = article.keywords
  const createdAt = article.created_at
  const writer = article.writer

  // console.log(article)
  return (
    <Link href={`article/${id}`}>
      <section className='w-full h-auto my-8 shadow-md rounded-lg border hover:cursor-pointer p-4 hover:bg-[#eee] duration-200'>
        <div className='px-5'>
          <div className='w-full mx-auto flex justify-between'>
            <div className='text-xl w-4/5 font-semibold text-[#3B454E]'>{title}</div>
            <div className='w-1/6 h-12 flex items-center justify-center'>
              <span className='mr-2'>{writer.nickname}</span>
              <Image 
                src="/assets/Profile-icon.svg"
                alt='content owner'
                width={25}
                height={25}
              />
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

export default CreatedPost