const StatsPanel = ({ productos }) => {
  const productoMasCaro = productos.reduce((max, p) => p.price > max.price ? p : max, productos[0])
  const productoMasBarato = productos.reduce((min, p) => p.price < min.price ? p : min, productos[0])
  const productosLargos = productos.filter(p => p.title.length > 20).length
  const precioTotal = productos.reduce((sum, p) => sum + p.price, 0)
  const promedioDescuento = productos.reduce((sum, p) => sum + p.discountPercentage, 0) / productos.length
  const promedioRating = productos.reduce((sum, p) => sum + p.rating, 0) / productos.length

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Estadísticas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200">Producto más caro</h3>
          <p className="text-gray-700 dark:text-gray-300">{productoMasCaro.title}: ${productoMasCaro.price}</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800 dark:text-green-200">Producto más barato</h3>
          <p className="text-gray-700 dark:text-gray-300">{productoMasBarato.title}: ${productoMasBarato.price}</p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-800 dark:text-purple-200">Productos con título largo</h3>
          <p className="text-gray-700 dark:text-gray-300">{productosLargos} productos</p>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">Precio total</h3>
          <p className="text-gray-700 dark:text-gray-300">${precioTotal.toFixed(2)}</p>
        </div>
        <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
          <h3 className="font-semibold text-red-800 dark:text-red-200">Promedio de descuento</h3>
          <p className="text-gray-700 dark:text-gray-300">{promedioDescuento.toFixed(2)}%</p>
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
          <h3 className="font-semibold text-indigo-800 dark:text-indigo-200">Rating promedio</h3>
          <p className="text-gray-700 dark:text-gray-300">{promedioRating.toFixed(2)} ⭐</p>
        </div>
      </div>
    </div>
  )
}

export default StatsPanel