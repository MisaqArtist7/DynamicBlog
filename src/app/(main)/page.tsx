"use client"
import React from 'react'
import products from './Products'
import Header from '@/components/shared/Header/Header'
import ProductCard from '@/components/ui/prodcutCart'

export default function ShoppingCart() {
  return (
    <>
      <Header />

      <section className='mt-9 flex-col-center container'>
        <h1 className='text-6xl font-semibold text-center'>Boxing club</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center place-content-center place-items-center gap-3 my-9'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>  
      </section>
    </>
  )
}
