import axios from "axios";

export const obtenerAdministrador = async (matricula) => {
  try {
        const response = await axios.get(`http://localhost:8000/api/administrador_matricula/${matricula}/`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el administrador:', error);
        throw error;
    }   
}