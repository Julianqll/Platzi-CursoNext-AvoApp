import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()
  const { query } = useRouter()

  useEffect(() => {
    window
      .fetch(`/api/avo/${query.id}`)
      .then((response) => response.json())
      .then(({ data }) => {
        setProduct(data)
      })
  }, [query.id])

  return (
    <section>
      <h1>Página producto: {product?.name}</h1>
      <h1>Precio producto: {product?.price}</h1>
    </section>
  )
}

export default ProductPage
