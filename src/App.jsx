import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProductList from './components/ProductList'
import StatsPanel from './components/StatsPanel'
import SearchBar from './components/SearchBar'
import ThemeToggle from './components/ThemeToggle'
import DetailedStats from './components/DetailedStats'
import DataVisualizations from './components/DataVisualizations'
import ExportTools from './components/ExportTools'

function App() {
  const [productos, setProductos] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('')
  const [ordenarPor, setOrdenarPor] = useState('')
  const [orden, setOrden] = useState('asc')
  const [error, setError] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Verificar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    // Si no hay preferencia guardada, usar la preferencia del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await axios.get('https://dummyjson.com/products')
        setProductos(respuesta.data.products)
        setCargando(false)
        toast.success('Productos cargados correctamente')
      } catch (error) {
        setError('Error al cargar los productos')
        setCargando(false)
        toast.error('Error al cargar los productos')
      }
    }

    obtenerProductos()
  }, [])

  // Efecto para manejar el modo oscuro
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  // Obtener categorías únicas
  const categorias = [...new Set(productos.map(p => p.category))]

  // Filtrar productos
  const productosFiltrados = productos
    .filter(p => p.title.toLowerCase().includes(busqueda.toLowerCase()))
    .filter(p => !categoria || p.category === categoria)

  // Ordenar productos
  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (!ordenarPor) return 0
    
    const factor = orden === 'asc' ? 1 : -1
    if (ordenarPor === 'price') {
      return (a.price - b.price) * factor
    }
    if (ordenarPor === 'rating') {
      return (a.rating - b.rating) * factor
    }
    return 0
  })

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
    toast.info(`Modo ${!isDarkMode ? 'oscuro' : 'claro'} activado`)
  }

  if (cargando) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-xl text-gray-800 dark:text-white">Cargando...</div>
    </div>
  )
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-red-600 dark:text-red-400">{error}</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? 'dark' : 'light'}
      />
      
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Lista de Productos
      </h1>
      
      <SearchBar
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        categoria={categoria}
        setCategoria={setCategoria}
        ordenarPor={ordenarPor}
        setOrdenarPor={setOrdenarPor}
        orden={orden}
        setOrden={setOrden}
        categorias={categorias}
      />

      <ExportTools productos={productosOrdenados} />
      <DataVisualizations productos={productosOrdenados} />
      <DetailedStats productos={productosOrdenados} />
      <StatsPanel productos={productosOrdenados} />
      <ProductList productos={productosOrdenados} />
    </div>
  )
}

export default App
