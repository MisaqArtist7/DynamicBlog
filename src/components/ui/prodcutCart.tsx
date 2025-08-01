
import Image from "next/image"

type Product = {
  id: number
  name: string
  price: number
  offer: number
  image: string
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div key={product.id} className='p-5 flex-col-center gap-1 shadow bg-white'>
      <Image src={product.image} alt={product.name} width={222} height={222} />
      <h2 className='text-sm w-full'>{product.name}</h2>
      <div className='flex items-center justify-start gap-2 w-full text-sm'>
        <span>{product.offer} EUR</span>
        <span className='text-gray-600 line-through'>{product.price} EUR</span>
      </div>
      <div className='py-2 w-full flex-row-center'>
        <button className='flex-row-center gap-1 border w-[70%] py-1 rounded-xs hover:bg-black hover:text-white transition ease-in duration-75'>
          Add to cart
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
            1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 
            1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 
            0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
