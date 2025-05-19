const StatsPanel = ({ productos }) => {
  const productoMasCaro = productos.reduce((max, p) => p.price > max.price ? p : max, productos[0])
  const productoMasBarato = productos.reduce((min, p) => p.price < min.price ? p : min, productos[0])
  const productosLargos = productos.filter(p => p.title.length > 20).length
  const precioTotal = productos.reduce((sum, p) => sum + p.price, 0)
  const promedioDescuento = productos.reduce((sum, p) => sum + p.discountPercentage, 0) / productos.length
  const promedioRating = productos.reduce((sum, p) => sum + p.rating, 0) / productos.length

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Estadísticas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Producto más caro</h3>
          <p>{productoMasCaro.title}: ${productoMasCaro.price}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Producto más barato</h3>
          <p>{productoMasBarato.title}: ${productoMasBarato.price}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-800">Productos con título largo</h3>
          <p>{productosLargos} productos</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800">Precio total</h3>
          <p>${precioTotal.toFixed(2)}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-red-800">Promedio de descuento</h3>
          <p>{promedioDescuento.toFixed(2)}%</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-semibold text-indigo-800">Rating promedio</h3>
          <p>{promedioRating.toFixed(2)} ⭐</p>
        </div>
      </div>
    </div>
  )
}

export default StatsPanel