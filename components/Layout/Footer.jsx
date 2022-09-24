import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className='bg-[#1E1E1E]'>
      <div className='w-2/3 mx-auto'>
        <div className='flex h-[250px] mt-8 items-center'>
          <div className='w-1/3 mx-auto'>
            <Image 
              src="/assets/White-Logo.svg"
              alt="logo"
              width={160}
              height={40}
            />
          <div className='mt-[90px]'>
            <span className='text-sm text-[#ccc]'>© { new Date().getFullYear() } Up-road 
              <span className='ml-4 pl-4 border-l border-[#ccc]'>All rights reserved</span>
            </span>
          </div>
          </div>
          <div className='w-2/3 mt-8'>
            <div className='text-[#fff] w-full flex justify-start'>
              <div className='w-40 text-[#fff] text-base font-semibold mr-20'>DAO</div>
              <div className='w-40 text-[#fff] text-base font-semibold mr-20'>Up-road Token</div>
              <div className='w-40 text-[#ccc] text-base font-semibold'>Terms of service</div>
            </div>
            <div className='mt-6 w-full flex justify-start'>
              <div className='w-40 text-[#fff] text-base font-semibold mr-20'>Protocol</div>
              <div className='w-40 text-[#fff] text-base font-semibold mr-20'>Tokenomics</div>
              <div className='w-40 text-[#ccc] text-base font-semibold'>Privary</div>
            </div>
            <div className='flex items-center justify-between mt-[40px]'>
              <div className='flex items-center'>
                <div className='mr-4'>
                  <Image 
                    src="/assets/Twitter-icon.svg"
                    alt="Twitter"
                    width={22}
                    height={22}
                  />
                </div>
                <div className='mr-4'>
                  <Image 
                    src="/assets/Instagram-icon.svg"
                    alt="Instagram"
                    width={36}
                    height={36}
                  />
                </div>
                <div className='mr-4'>
                  <Image 
                    src="/assets/Discord-icon.svg"
                    alt="Discord"
                    width={22}
                    height={22}
                  />
                </div>
                <div>
                  <Image 
                    src="/assets/Github-icon.svg"
                    alt="Github"
                    width={22}
                    height={22}
                  />
                </div>
                <div className='ml-20'>
                  <span className='text-base text-[#fff] font-semibold'>Docs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default Footer