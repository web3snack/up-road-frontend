import React from 'react'
import Image from 'next/image'

const CreatedPostItem = () => {
  return (
    <section className='mt-12 border rounded-xl flex justify-between'>
      <div className='w-2/3'>
        <div className='px-4 py-4'>
          <div className='text-xl font-semibold text-[#3B454E]'>이더리움 디플레이션에 대하여</div>
          <div className='my-2 text-sm text-[#8C939A]'>나는 이더리움 디플레이션에 대해 전해지는 정보만 곧이 그대로 믿고 있는 건 아닐까? 이번 기회에 #donttrustverify(믿지말고 검증하라)라는 블록체인 모토에 따라, 디플레이션에 대한 또 다른 시각을 공유해보고, 이에 대한 나의 의견을 확인해보도록 하자.</div>
          <div className='text-[#8C939A] text-sm'>https://github.com/Resister-boy</div>
        </div>
      </div>
      <Image 
        src="/assets/black-user.png"
        alt="link"
        width={300}
        height={180}
      />
    </section>
  )
}

export default CreatedPostItem