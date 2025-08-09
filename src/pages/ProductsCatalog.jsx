import ProductCard from '../components/ProductCard';

function ProductCatalog({ data, loading, error }) {
  return (
    <div id="products" className="min-h-screen bg-white">
      {loading ? (
        <div className="max-w-7xl mx-auto px-4 py-8 w-full">
          <h1 className="text-4xl font-bold text-[#1F7A8C] mb-6">Product Catalog</h1>
          <p className="text-gray-600 mb-8">Loading our products...</p>

          <div className="flex justify-center items-center h-96">
            <div className="relative">
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#1F7A8C]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#1F7A8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : error ? (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-red-600">Error loading products</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#1F7A8C] mb-3">Our Products</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {data.map((product) => (
              <ProductCard
                key={product.product_id}
                product={product}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductCatalog;
