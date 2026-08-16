import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {obtenerAdministrador} from './accesoDatos.js'
let matricula= 134
let nombre="Nombre administración"
let direccion="22 Acacias Avenue"
function App() {
  const [count, setCount] = useState(0)
  const [matricula, setMatricula] = useState('');
  const [datosAdministrador, setDatosAdministrador] = useState(null);
  const handleBuscar = async (e) => {
    e.preventDefault();
    try {
      const datos = await obtenerAdministrador(matricula);
      setDatosAdministrador(datos);
    } catch (error) {
      console.error('Error al buscar el administrador:', error);
    }
  };

  return (
    <>
          <form className="form">
            <label titulo1="titulo1" htmlFor="titulo1">Ingrese número de matrícula </label>
            <input type="text" id="inputMatricula" name="matricula" value = {matricula} onChange={(e) => setMatricula(e.target.value)} />
            <button type="submit" onClick={handleBuscar}>Buscar</button>
          </form>
          <table className="table">
            <tr>
              <th>Campo</th>
              <th>Valor</th>
            </tr>
            <tr>
              <td>Matrícula</td>
              <td>{datosAdministrador?.matricula}</td>
            </tr>
            <tr>
              <td>Nombre</td>
              <td>{datosAdministrador?.nombre}</td>
            </tr>
            <tr>
              <td>Mail</td>
              <td>{datosAdministrador?.correo}</td>
            </tr>
          </table>
    </>
  )
}

export default App
