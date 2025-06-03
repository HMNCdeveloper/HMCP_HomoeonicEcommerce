import ProductCard from '../components/ProductCard'
function ProductCatalog() {
  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
    { id: 3, name: 'Product 3', price: '$30' },
    { id: 4, name: 'Product 4', price: '$40' },
  ]
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Products Catalog</h1>
      <p className='mb-4'>Explore our wide range of products.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <ProductCard products={products} />
      </div>
    </div>
  )
}
export default ProductCatalog
