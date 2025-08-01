import React from 'react'
import Image from 'next/image'

export default function ShoppingCart() {
  return (
    <section className='mt-12 flex-col-center container'>
      <h1 className='text-6xl font-semibold'>Boxing club</h1>
      <div className='grid grid-cols-4 gap-3 my-11 '>

        <div className='p-5 flex-col-center gap-1 shadow bg-white'>
          <Image src='/images/1.jpg' alt='Boxing Gloves' width={222} height={222} />
          <h2 className='text-sm w-full'>Pro Combat Boxing Gloves - Red</h2>
          <div className='flex items-center justify-start gap-2 w-full text-sm'>
            <span>€59,90 EUR</span>
            <span className='text-gray-600 line-through'>€79,90 EUR</span>
          </div>
          <div className='py-2 w-full flex-row-center'>
            <button className='flex-row-center gap-1 border w-[70%] py-1 rounded-xs hover:bg-black hover:text-white transition ease-in duration-75'>Add to cart
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className='p-5 flex-col-center gap-1 shadow bg-white'>
          <Image src='/images/2.jpg' alt='Muay Thai Shorts' width={222} height={222} />
          <h2 className='text-md w-full'>Muay Thai Tiger Shorts - Black</h2>
          <div className='flex items-center justify-start gap-2 w-full text-sm'>
            <span>€34,99 EUR</span>
            <span className='text-gray-600 line-through'>€49,99 EUR</span>
          </div>
          <div className='py-2 w-full flex-row-center'>
            <button className='flex-row-center gap-1 border w-[70%] py-1 rounded-xs hover:bg-black hover:text-white transition ease-in duration-75'>Add to cart
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className='p-5 flex-col-center gap-1 shadow bg-white'>
          <Image src='/images/3.jpg' alt='Hand Wraps' width={222} height={222} />
          <h2 className='text-md w-full'>Premium Hand Wraps - 4.5m</h2>
          <div className='flex items-center justify-start gap-2 w-full text-sm'>
            <span>€12,50 EUR</span>
          </div>
          <div className='py-2 w-full flex-row-center'>
            <button className='flex-row-center gap-1 border w-[70%] py-1 rounded-xs hover:bg-black hover:text-white transition ease-in duration-75'>Add to cart
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className='p-5 flex-col-center gap-1 shadow bg-white'>
          <Image src='/images/4.jpg' alt='Focus Mitts' width={222} height={222} />
          <h2 className='text-md w-full'>Sporttasche TEAM Boxing</h2>
          <div className='flex items-center justify-start gap-2 w-full text-sm'>
            <span>€37,99 EUR</span>
            <span className='text-gray-600 line-through'>€59,99 EUR</span>
          </div>
          <div className='py-2 w-full flex-row-center'>
            <button className='flex-row-center gap-1 border w-[70%] py-1 rounded-xs hover:bg-black hover:text-white transition ease-in duration-75'>Add to cart
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className='p-5 flex-col-center gap-1 shadow bg-white'>
          <Image src='/images/5.jpg' alt='Shin Guards' width={222} height={222} />
          <h2 className='text-md w-full'>Boxschuhe ADIDAS Box</h2>
          <div className='flex items-center justify-start gap-2 w-full text-sm'>
            <span>€69,99 EUR</span>
            <span className='text-gray-600 line-through'>€99,99 EUR</span>
          </div>
          <div className='py-2 w-full flex-row-center'>
            <button className='flex-row-center gap-1 border w-[70%] py-1 rounded-xs hover:bg-black hover:text-white transition ease-in duration-75'>Add to cart
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className='p-5 flex-col-center gap-1 shadow bg-white'>
          <Image src='/images/6.jpg' alt='Groin Guard' width={222} height={222} />
          <h2 className='text-md w-full'>Punching bag (80/180 cm)</h2>
          <div className='flex items-center justify-start gap-2 w-full text-sm'>
            <span>€199,99 EUR</span>
          </div>
          <div className='py-2 w-full flex-row-center'>
            <button className='flex-row-center gap-1 border w-[70%] py-1 rounded-xs hover:bg-black hover:text-white transition ease-in duration-75'>Add to cart
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className='p-5 flex-col-center gap-1 shadow bg-white'>
          <Image src='/images/7.jpg' alt='Boxing Shoes' width={222} height={222} />
          <h2 className='text-md w-full'>Boxsack Hydro</h2>
          <div className='flex items-center justify-start gap-2 w-full text-sm'>
            <span>€74,90 EUR</span>
            <span className='text-gray-600 line-through'>€99,90 EUR</span>
          </div>
          <div className='py-2 w-full flex-row-center'>
            <button className='flex-row-center gap-1 border w-[70%] py-1 rounded-xs hover:bg-black hover:text-white transition ease-in duration-75'>Add to cart
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className='p-5 flex-col-center gap-1 shadow bg-white'>
          <Image src='/images/8.jpg' alt='Punching Bag' width={222} height={222} />
          <h2 className='text-md w-full'>Heavy Punching Bag - 120cm</h2>
          <div className='flex items-center justify-start gap-2 w-full text-sm'>
            <span>€8,99 EUR</span>
            <span className='text-gray-600 line-through'>€12,99 EUR</span>
          </div>
          <div className='py-2 w-full flex-row-center'>
            <button className='flex-row-center gap-1 border w-[70%] py-1 rounded-xs hover:bg-black hover:text-white transition ease-in duration-75'>Add to cart
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>  
    </section>
  )
}
