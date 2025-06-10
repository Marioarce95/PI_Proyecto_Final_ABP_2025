import { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d']

const DataVisualizations = ({ productos }) => {
  // Datos para el gráfico de barras (productos por categoría)
  const productosPorCategoria = productos.reduce((acc, producto) => {
    acc[producto.category] = (acc[producto.category] || 0) + 1
    return acc
  }, {})

  const datosBarras = Object.entries(productosPorCategoria).map(([categoria, cantidad]) => ({
    categoria,
    cantidad
  }))

  // Datos para el gráfico de líneas (evolución de precios simulada)
  const datosLineas = productos.slice(0, 10).map((producto, index) => ({
    id: producto.id,
    nombre: producto.title,
    precio: producto.price,
    precioSimulado: producto.price * (1 + Math.random() * 0.2 - 0.1)
  }))

  // Datos para el gráfico circular (proporción de stock)
  const rangosStock = {
    'Bajo (< 50)': 0,
    'Medio (50-100)': 0,
    'Alto (> 100)': 0
  }

  productos.forEach(producto => {
    if (producto.stock < 50) rangosStock['Bajo (< 50)']++
    else if (producto.stock <= 100) rangosStock['Medio (50-100)']++
    else rangosStock['Alto (> 100)']++
  })

  const datosPie = Object.entries(rangosStock).map(([rango, cantidad]) => ({
    name: rango,
    value: cantidad
  }))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Gráfico de Barras - Productos por Categoría */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Productos por Categoría
        </h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={datosBarras}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="categoria" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cantidad" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gráfico de Líneas - Evolución de Precios */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Evolución de Precios
        </h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={datosLineas}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nombre" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="precio" stroke="#8884d8" />
              <Line type="monotone" dataKey="precioSimulado" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gráfico Circular - Proporción de Stock */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg md:col-span-2">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Distribución de Stock
        </h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={datosPie}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {datosPie.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default DataVisualizations 