const ProductList = ({ productos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in">
      {productos.map(producto => (
        <div 
          key={producto.id} 
          className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col transform hover:scale-105 transition-transform"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-3 flex-grow">
            {producto.title}
          </h2>
          <div className="flex justify-between items-center">
            <p className="text-green-600 font-bold text-2xl">
              ${producto.price}
            </p>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {producto.discountPercentage}% OFF
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList