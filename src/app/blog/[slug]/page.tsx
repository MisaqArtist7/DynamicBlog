import blogs from '../../(main)/blogs'
import Image from 'next/image';

interface BlogPageParams {
  slug: string;
}

export default function BlogPage({ params }: { params: BlogPageParams }) {
  const blog = blogs.find((blog) => blog.slug === params.slug)
  console.log(blog)

  if (!blog) {
    return <div>Blog Not found</div>
  }

  return (
    <div  className='flex-row-center my-11 container'>
      <div className='grid grid-cols-1 md:grid-cols-6 bg-white gap-4 p-2 shadow-[var(--cartShadow)]'>

        <div className='md:col-span-2 w-full bg-amber-500 flex-row-center'>
          <Image src={blog.img} width={444} height={444} alt="" className='w-full h-auto object-cover' />  
        </div>

        <div className='md:col-span-4 h-full flex flex-col justify-between p-3 gap-11 md:gap-0'>

          <div className='flex flex-col gap-2'>
            <span className='text-[#6959CD]'>{blog.field}</span>
            <h2 className='font-semibold text-2xl'>{blog.title}</h2>
            <p className='text-gray-700'>{blog.desc}</p>
          </div>

          <div>
            <div className="flex gap-3 items-center">
              <Image src={blog.authorImg} width={44} height={44} alt=""/>  
              <div className="text-sm">
                <h3 className="font-semibold">Phoenix Baker</h3>
                <span className="text-[#667085]">19 Jan 2022</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
