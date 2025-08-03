"use client"
import React from 'react'
import products from './Products'
import Header from '@/components/shared/Header/Header'
import { useState } from 'react'
import ProductCard from '@/components/ui/prodcutCart'
export default function ShoppingCart() {

  const [myProducts] = useState(products)

  return (

    <>
      <Header />

      <section className='mt-12 flex-col-center container'>
        <h1 className='text-6xl font-semibold'>Boxing club</h1>
        <div className='grid grid-cols-4 gap-3 my-11'>
          {myProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>  
      </section>

    </>
  )
}
