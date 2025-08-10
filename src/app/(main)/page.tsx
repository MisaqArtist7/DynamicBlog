import React from 'react'
import Link from 'next/link'
import blogs from './blogs'
import Image from 'next/image'

export default function BlogsPage() {

  const blogsItem = blogs

  return (
    <React.Fragment>
      <section className="flex flex-col min-h-screen">

        <div className="container flex-col-center pt-11 gap-3 bg-[#F9F5FF]">
          <span className="text-[#6941C6] bg-[#6941C6]/10 px-3 py-1 rounded-full">Our blog</span>
          <div className="flex-col-center gap-4 py-3">
            <h1 className="text-[#42307D] text-5xl font-semibold">Resources and insights</h1>
            <h2 className="text-[#6941C6]">
              The latest industry news, interviews, technologies, and resources.
            </h2>
          </div>
          <form action="" className="mt-2 w-full flex-row-center">
            <input type="search" placeholder="Search" className="border border-gray-300 w-1/4 rounded px-3 py-1 outline-none bg-white" />
          </form>
        </div>

        <Image src="/images/Decore.svg" width={300} height={300} alt="" className="w-full object-cover" /> 

        <div className=" container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5 px-22 -mt-[70px] sm:-mt-[200px] lg:-mt-[300px] relative z-10 ">
          {blogsItem.map((blog) => (
            <div key={blog.id} className="bg-white shadow-[var(--cartShadow)] p-4 h-full">
              <Link href={`/blog/${blog.slug}`}>
                <div className="flex flex-col justify-between h-full">
                  <Image src={blog.img} width={369} height={369} alt={blog.title} />
                  <div className="pt-4">
                    <span className="text-[#6941C6] text-sm">{blog.field}</span>
                    <div className="py-2 flex justify-between items-center">
                      <h2 className="font-semibold text-lg">{blog.title}</h2>
                      <Image src="/images/Chevron.svg" width={15} height={15} alt="" />
                    </div>
                    <p className="text-[#667085]">{blog.desc}</p>
                  </div>
                  <div className="pt-11">
                    <div className="flex gap-3 items-center">
                      <Image src={blog.authorImg} width={44} height={44} alt={blog.authorName} />
                      <div className="text-sm">
                        <h3 className="font-semibold">{blog.authorName}</h3>
                        <span className="text-[#667085]">{blog.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="py-11 container flex-row-center">
          <button className="flex-row-center gap-2 text-[#6941C6] bg-[#6941C6]/8 px-4 py-2 rounded-lg hover:cursor-pointer">
            <Image src="/images/downIcon.svg" width={15} height={15} alt="Load more" />
            Load more
          </button>
        </div>

      </section>
    </React.Fragment>
  )
}
