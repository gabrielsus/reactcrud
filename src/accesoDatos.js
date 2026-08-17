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

export const obtenerPDF = async (ticker,desde,hasta)=> {
    try {
        const response = await axios.post('http://localhost:8000/descargar-reporte-pdf/',
        {
            ticker: ticker,
            start_date: desde,
            end_date: hasta
        },
        {
            responseType: 'blob', // Indica que la respuesta será un archivo binario
        }
        );
        return response.data; // Devuelve el contenido del PDF como un Blob
    } catch (error) {
        console.error('Error al obtener el PDF:', error);
        throw error;
    }
}