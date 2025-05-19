# EVIDENCIA 1

## Lista de Productos con React + Vite

Este proyecto es una aplicación web que muestra una lista de productos consumiendo la API de DummyJSON. Está construido con React, Vite, Tailwind CSS y Axios.

### Tecnologías Utilizadas

- [React](https://reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario
- [Vite](https://vitejs.dev/) - Herramienta de compilación que proporciona una experiencia de desarrollo más rápida
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utilitario
- [Axios](https://axios-http.com/) - Cliente HTTP para realizar peticiones a la API
- [DummyJSON](https://dummyjson.com/) - API de prueba para obtener datos de productos

### Requisitos Previos

- Node.js (versión 14.0.0 o superior)
- npm (incluido con Node.js)

### Instalación

Clona este repositorio o descárgalo:
```bash
git clone <https://github.com/Marioarce95/PI_Evidencias_2025.git>
```

### Navega al directorio del proyecto:

```bash
cd PI_Evidencias_2025
```

 ### Instala las dependencias:

```bash
npm install
```

### Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

# EVIDENCIA 2

## División de Componentes

El proyecto se ha dividido en los siguientes componentes principales:

1. **ProductList**: 
   - Encargado de mostrar la lista de productos
   - Recibe los productos como prop
   - Implementa diseño de tarjetas con Tailwind
   - Incluye animaciones de hover y transiciones

2. **StatsPanel**: 
   - Muestra las estadísticas de los productos
   - Recibe los productos filtrados como prop
   - Calcula y muestra estadísticas en tiempo real
   - Diseño con tarjetas de diferentes colores para cada estadística

## Estadísticas Implementadas

Se han agregado las siguientes estadísticas:

1. **Producto más caro**
   - Muestra nombre y precio del producto más costoso
   - Actualización dinámica según filtros

2. **Producto más barato**
   - Muestra nombre y precio del producto más económico
   - Actualización dinámica según filtros

3. **Productos con título largo**
   - Cuenta productos con títulos de más de 20 caracteres
   - Útil para análisis de contenido

4. **Precio total**
   - Suma total de precios de productos filtrados
   - Actualización en tiempo real

5. **Promedio de descuento**
   - Calcula el descuento promedio de productos filtrados
   - Expresado en porcentaje

6. **Rating promedio** (Estadística adicional)
   - Promedio de calificaciones de productos
   - Indicador de satisfacción del cliente

## Mejoras de Diseño

- Implementación de Tailwind CSS para diseño responsive
- Animaciones suaves en hover y transiciones
- Tarjetas con sombras y bordes redondeados
- Sección de estadísticas con fondos de colores distintivos
- Diseño adaptable a diferentes tamaños de pantalla
