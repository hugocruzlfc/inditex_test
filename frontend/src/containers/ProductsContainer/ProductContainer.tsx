import React from 'react'
import { ProductList } from '../../components'

export default function ProductContainer() {
  return (
    <div className="container md mx-auto">
     
          <h2 className="flex justify-center mt-10 mb-5">Products in stock</h2>
           <ProductList />
      </div>
  )
}
