import {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  // Se pueden escribir variables por fuera que luego llamaremos en el return con {} ya que es código JS
  // const saludo = "Buen día Mundo ♥"
  // const edad = 15
  // let mensaje; edad >= 18 ? mensaje = "Eres mayor de edad" : mensaje = "No eres mayor de edad"

  // Obtener Fecha
  const fecha = new Date().getFullYear();

  // Crear listado de productos
  const [productos, guardarProductos] = useState([
  {id: 1, nombre: "Remera ReactJS", precio: 1500},
  {id: 2, nombre: "Taza ReactJS", precio: 1000},
  {id: 3, nombre: "Remera Phyton", precio: 1700},
  {id: 4, nombre: "Taza Phython", precio: 1200},
  ])
  
// State para carrito de compras
const [carrito, agregarProducto] = useState([])


  return (
    <Fragment>
      <h1>Básicos React</h1>

      {/* <h2>{saludo}</h2> */}
      {/* <h2>{mensaje}</h2> */}

      <Header titulo="Tienda virtual" nombre="StarIT" />

      <h1>Lista de Productos</h1>
      {productos.map(producto => ( 
      <Producto
       key={producto.id}
       producto={producto}
       productos={productos}
       carrito={carrito}
       agregarProducto={agregarProducto}
       />
      ))}

      <Carrito
      carrito= {carrito}
      agregarProducto={agregarProducto}
      />

      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
