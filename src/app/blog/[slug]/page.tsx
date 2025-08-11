import blogs from '../../(main)/blogs'
import Image from 'next/image';
import Link from 'next/link';

interface BlogPageProps {
  params: Promise<{ slug: string }>
}
export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params; 
  const blog = blogs.find((blog) => blog.slug === slug);
  // console.log(blog);

  if (!blog) {
    return <div>Blog Not found</div>
  }

  return (
    <div  className='flex-col-center my-11 container'>
      <div className='grid grid-cols-1 md:grid-cols-6 bg-white gap-4 p-2 shadow-[var(--cartShadow)]'>

        <div className='md:col-span-2 w-full flex-row-center'>
          <Image src={blog.img} width={444} height={444} alt={blog.img} className='w-full h-auto object-cover' />  
        </div>

        <div className='md:col-span-4 h-full flex flex-col justify-between p-3 gap-11 md:gap-0'>

          <div className='flex flex-col gap-2'>
            <span className='text-[#6959CD]'>{blog.field}</span>
            <h2 className='font-semibold text-2xl'>{blog.title}</h2>
            <p className='text-gray-700'>{blog.desc}</p>
          </div>

          <div>
            <div className="flex gap-3 items-center">
              <Image src={blog.authorImg} width={44} height={44} alt={blog.authorName} />  
              <div className="text-sm">
                <h3 className="font-semibold">{blog.authorName}</h3>
                <span className="text-[#667085]">{blog.date}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="py-11 container flex-row-center">
        <Link href="/">
          <button className="flex-row-center gap-2 text-[#6941C6] bg-[#6941C6]/8 px-7 py-2 rounded-lg hover:cursor-pointer">
            Go back
          </button>
        </Link>
      </div>
    </div>
  )
}
