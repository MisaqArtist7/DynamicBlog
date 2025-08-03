import React from 'react'
import './header.css'
import Image from 'next/image';
export default function Header() {

    const [basket, setBasket] = React.useState(false);
    const showBasket = () => {
        setBasket(true);
    }

  return (
    <header className='bg-white h-18 shadow flex items-center container'>
        <nav className='h-full flex items-center justify-between w-full py-2'>
            <div className='h-full flex items-center'>
            <a className='border-r-2 border-gray-400 px-3 h-full flex-row-center text-2xl'>Boxing club</a>
            <ul className='flex gap-4 ml-4'>
                <li><a className='navlink'>Home</a></li>
                <li><a className='navlink'>Products</a></li>
                <li><a className='navlink'>About us</a></li>
                <li><a className='navlink'>Contact us</a></li>
            </ul>
            </div>
            <div className='flex items-center justify-between gap-2'>
            <button className='relative bg-[#EDEFF1] border border-gray-300 rounded-full w-10 h-10 flex-row-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </button>
            <button onClick={showBasket} className='relative bg-[#EDEFF1] border border-gray-300 rounded-full w-10 h-10 flex-row-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span className='absolute -right-1 -top-1 rounded-full shadow bg-black text-white w-4 h-4 border-gray-400 text-xs'>0</span>
            </button>
            </div>
        </nav>

        <div className={`${basket ? 'translate-x-0' : 'translate-x-full'} flex flex-col gap-4 overflow-auto justify-between basket bg-white top-0 bottom-0 fixed right-0 w-[333px] shadow-md px-6 py-5`}>

            <div className='flex justify-between items-center border-b border-b-gray-300 pb-3'>
                <h2 className='text-lg font-semibold'>Boxing Club</h2>
                <button onClick={() => setBasket(false)} className='border rounded-full p-1.5 hover:bg-black hover:text-white transition-colors ease-in duration-75'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className='flex flex-col justify-between items-start gap-2'>
                <div className='w-full'>
                    <Image src="/images/1.jpg" alt="" width={150} height={150} className='w-[88%] mx-auto object-cover' />
                    <div className='flex flex-col justify-between items-center'>
                        <h2 className='text-center text-lg'>Pro Combat Boxing Gloves</h2>
                        <div className='flex items-center gap-3'>
                            <span className='text-gray-600 line-through'>78 EUR</span>
                            <span>200 EUR</span>
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <Image src="/images/5.jpg" alt="" width={150} height={150} className='w-[88%] mx-auto object-cover' />
                    <div className='flex flex-col justify-between items-center'>
                        <h2 className='text-center text-lg'>Pro Combat Boxing Gloves</h2>
                        <div className='flex items-center gap-3'>
                            <span className='text-gray-600 line-through'>78 EUR</span>
                            <span>200 EUR</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center border-t border-t-gray-300 pt-2 gap-1'>
                <div className='flex flex-col justify-center'>
                    <span className='text-black/80'>Total price</span>
                    <span>777 $</span>
                </div>
                <button className='border px-3 py-2 rounded-sm hover:bg-black hover:text-white'>Complete Purchase</button>
            </div>
        </div>
    </header>
  )
}
