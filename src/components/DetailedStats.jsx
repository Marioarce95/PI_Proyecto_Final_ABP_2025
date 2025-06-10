const DetailedStats = ({ productos }) => {
  // Estadísticas generales
  const precioPromedio = productos.reduce((sum, p) => sum + p.price, 0) / productos.length
  const precioMaximo = Math.max(...productos.map(p => p.price))
  const precioMinimo = Math.min(...productos.map(p => p.price))
  const ratingPromedio = productos.reduce((sum, p) => sum + p.rating, 0) / productos.length
  const productosStockBajo = productos.filter(p => p.stock < 50).length
  const productosRatingAlto = productos.filter(p => p.rating >= 4.5).length

  // Estadísticas por categoría
  const categorias = [...new Set(productos.map(p => p.category))]
  const statsPorCategoria = categorias.map(categoria => {
    const productosCategoria = productos.filter(p => p.category === categoria)
    const precioPromedioCategoria = productosCategoria.reduce((sum, p) => sum + p.price, 0) / productosCategoria.length
    const ratingPromedioCategoria = productosCategoria.reduce((sum, p) => sum + p.rating, 0) / productosCategoria.length
    const productoMasCaro = productosCategoria.reduce((max, p) => p.price > max.price ? p : max, productosCategoria[0])
    const productoMasBarato = productosCategoria.reduce((min, p) => p.price < min.price ? p : min, productosCategoria[0])

    return {
      categoria,
      cantidad: productosCategoria.length,
      precioPromedio: precioPromedioCategoria,
      ratingPromedio: ratingPromedioCategoria,
      productoMasCaro,
      productoMasBarato
    }
  })

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Estadísticas Detalladas</h2>
      
      {/* Estadísticas Generales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200">Precio Promedio</h3>
          <p className="text-blue-600 dark:text-blue-300">${precioPromedio.toFixed(2)}</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800 dark:text-green-200">Precio Máximo</h3>
          <p className="text-green-600 dark:text-green-300">${precioMaximo.toFixed(2)}</p>
        </div>
        <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
          <h3 className="font-semibold text-red-800 dark:text-red-200">Precio Mínimo</h3>
          <p className="text-red-600 dark:text-red-300">${precioMinimo.toFixed(2)}</p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-800 dark:text-purple-200">Rating Promedio</h3>
          <p className="text-purple-600 dark:text-purple-300">{ratingPromedio.toFixed(2)} ⭐</p>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">Productos con Stock Bajo</h3>
          <p className="text-yellow-600 dark:text-yellow-300">{productosStockBajo} productos</p>
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
          <h3 className="font-semibold text-indigo-800 dark:text-indigo-200">Productos con Rating Alto</h3>
          <p className="text-indigo-600 dark:text-indigo-300">{productosRatingAlto} productos</p>
        </div>
      </div>

      {/* Estadísticas por Categoría */}
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Estadísticas por Categoría</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {statsPorCategoria.map(stat => (
          <div key={stat.categoria} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 dark:text-white mb-2 capitalize">
              {stat.categoria}
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600 dark:text-gray-300">
                Cantidad: {stat.cantidad} productos
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Precio Promedio: ${stat.precioPromedio.toFixed(2)}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Rating Promedio: {stat.ratingPromedio.toFixed(2)} ⭐
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Más Caro: {stat.productoMasCaro.title} (${stat.productoMasCaro.price})
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Más Barato: {stat.productoMasBarato.title} (${stat.productoMasBarato.price})
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailedStats 