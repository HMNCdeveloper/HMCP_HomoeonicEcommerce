function ProductCard({ products }) {
  console.log(products)
  return (
    <div className='product-card'>
      {products && products.length > 0
        ? products.map(product => (
            <div key={product.id} className='border p-4 mb-2 rounded shadow'>
              <h1>{product.id}</h1>
              <h3>{product.name}</h3>
              <span>{product.price}</span>
            </div>
          ))
        : 'No products available'}
    </div>
  )
}
export default ProductCard
