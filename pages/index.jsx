import React, { useState } from "react"
import Image from "next/image"
import Select from 'react-select'
import CreatedPost from "../components/Post/CreatedPost"
import Footer from '../components/Layout/Footer'

export default function Home({ contents }) {

  // console.log(contents)

  const options = [
    {
      value: 'latest',
      label: '최신순'
    },
    {
      value: 'popularity',
      label: '인기순'
    }
  ]

  return (
    <main className='w-full h-auto mx-auto'>
      <section className='pt-20 h-[420px] bg-[#F1F1F1] text-center'>
        <div className='text-3xl text-[#393939]'>Get started with Up-road</div>
        <div className='text-5xl text-[#000] font-semibold'>What are you looking up-to?</div>
        <div className="relative mt-12 w-[900px] mx-auto">
          <div className="absolute top-0 transform translate-y-1/2 left-4">
            <Image 
              src="/assets/Search-icon.svg"
              alt="Search"
              width={22}
              height={22}
            />
          </div>
          <div className="absolute top-0 transform translate-y-1 right-2">
            <button className=" w-24 h-10 bg-[#000] text-[#fff] rounded-3xl border-2 border-[#fff] hover:text-[#000] hover:font-semibold hover:bg-[#fff] hover:border-[#000] duration-200">Search</button>
          </div>
          <input type="text" placeholder='Looking for a curation content' className="w-full h-12 rounded-3xl text-center outline-none shadow"/>
        </div>
      </section>
      <section className="w-[900px] mt-12 mx-auto">
        <div className="flex justify-start">
          <Select
            className="basic-single w-[200px] outline-none"
            classNamePrefix="select"
            isSearchable={false}
            defaultValue={options[0]}
            options={options} 
          />
        </div>
        <div>
          <CreatedPost />
        </div>
      </section>
      <Footer />
    </main>
  )
}

// export async function getServerSideProps() {

//   const apiUrl = "https://9333-58-76-161-105.jp.ngrok.io/article"
//   const contents = await fetch(apiUrl)
  
//   return {
//     props: { contents }
//   }
// }