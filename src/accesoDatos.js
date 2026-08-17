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
        const response = await axios.post('http://localhost:8000/descargar-reporte-pedf/',
        {
            ticker: ticker,
            desde: desde,
            hasta: hasta
        },
        {
            responseType: 'blob', // Indica que la respuesta será un archivo binario
        }
        );
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'reporte.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url); // Libera el objeto URL creado
    } catch (error) {
        console.error('Error al obtener el PDF:', error);
        throw error;
    }
}