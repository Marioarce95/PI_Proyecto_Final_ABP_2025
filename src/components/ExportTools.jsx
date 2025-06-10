import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'
import { toast } from 'react-toastify'

const ExportTools = ({ productos }) => {
  // Función para exportar a JSON
  const exportToJSON = () => {
    try {
      const jsonString = JSON.stringify(productos, null, 2)
      const blob = new Blob([jsonString], { type: 'application/json' })
      saveAs(blob, 'productos.json')
      toast.success('Archivo JSON exportado correctamente')
    } catch (error) {
      toast.error('Error al exportar a JSON')
      console.error('Error al exportar a JSON:', error)
    }
  }

  // Función para exportar a CSV
  const exportToCSV = () => {
    try {
      const headers = ['ID', 'Título', 'Precio', 'Categoría', 'Stock', 'Rating']
      const csvData = productos.map(producto => [
        producto.id,
        producto.title,
        producto.price,
        producto.category,
        producto.stock,
        producto.rating
      ])
      
      const csvContent = [
        headers.join(','),
        ...csvData.map(row => row.join(','))
      ].join('\n')
      
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' })
      saveAs(blob, 'productos.csv')
      toast.success('Archivo CSV exportado correctamente')
    } catch (error) {
      toast.error('Error al exportar a CSV')
      console.error('Error al exportar a CSV:', error)
    }
  }

  // Función para exportar a Excel
  const exportToExcel = () => {
    try {
      const worksheet = XLSX.utils.json_to_sheet(productos)
      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Productos')
      
      // Generar archivo Excel
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
      const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      saveAs(blob, 'productos.xlsx')
      toast.success('Archivo Excel exportado correctamente')
    } catch (error) {
      toast.error('Error al exportar a Excel')
      console.error('Error al exportar a Excel:', error)
    }
  }

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={exportToJSON}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Exportar JSON
      </button>
      <button
        onClick={exportToCSV}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
      >
        Exportar CSV
      </button>
      <button
        onClick={exportToExcel}
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
      >
        Exportar Excel
      </button>
    </div>
  )
}

export default ExportTools 