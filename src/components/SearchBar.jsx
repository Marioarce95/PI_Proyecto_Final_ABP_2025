const SearchBar = ({ 
  busqueda, 
  setBusqueda, 
  categoria, 
  setCategoria, 
  ordenarPor, 
  setOrdenarPor, 
  orden, 
  setOrden, 
  categorias 
}) => {
  return (
    <div className="max-w-4xl mx-auto space-y-4 mb-8">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full p-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="p-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="">Todas las categorías</option>
          {categorias.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <select
          value={ordenarPor}
          onChange={(e) => setOrdenarPor(e.target.value)}
          className="p-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="">Ordenar por...</option>
          <option value="price">Precio</option>
          <option value="rating">Rating</option>
        </select>

        <select
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
          className="p-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          disabled={!ordenarPor}
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    </div>
  )
}

export default SearchBar 