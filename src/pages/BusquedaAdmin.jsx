import {useState} from 'react'
import {obtenerAdministrador} from '../accesoDatos.js' 
function BusquedaAdmin() {
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
            <tbody>
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
            </tbody>
          </table>
      </>
    );
}
export default BusquedaAdmin;
