import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <section className='flex justify-center min-h-screen'>
      <div className='container grid grid-cols-12 w-full'>
        <div className='col-span-4 flex-row-center'>
          <div className='relative'>
            <h1 className='text-4xl font-semibold pl-11 pr-5'>Calculator App User Interface Design.</h1>  
            <Image src="/images/6.svg" width={33} height={33} alt={'pic'} className='absolute left-0 bottom-0'/>
            <Image src="/images/7.svg" width={33} height={33} alt={'pic'} className='absolute right-11 top-0 '/>
          </div>
        </div>
        <div className='col-span-8 flex-row-center'>
          <div className='relative'>
            <Image src="/images/main.svg" width={444} height={444} alt={'pic'} />
            <Image src="/images/1.svg" width={303} height={303} alt={'pic'} className='absolute -right-16 -top-11' />
            <div className='bg-[#17181A] absolute h-[422px] w-[222px] rounded-[22px] top-11 left-22'>
              <div className='flex flex-col'>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <Image src="/images/2.svg" width={303} height={303} alt={'pic'} className='absolute left-9 -bottom-11'/>
          </div>
        </div>    
      </div>
    </section>
  )
}
