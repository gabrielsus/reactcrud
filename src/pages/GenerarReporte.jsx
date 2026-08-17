import {useState} from 'react'
import {obtenerPDF} from '../accesoDatos.js'
function GenerarReporte() {
    const [ticker, setTicker] = useState('');
    const [desde, setDesde] = useState('');
    const [hasta, setHasta] = useState(''); 
    const handleGenerarReporte = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
        const respuestaPDF = await obtenerPDF(ticker,desde,hasta);
        const blob = new Blob([respuestaPDF], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `reporte_${ticker}.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url); // Libera el objeto URL creado
        } catch (error) {
            console.error('Error al generar el reporte:', error);
        }
    };
    return (
        <>
          <form className="form">
            <label htmlFor="ticker">Ticker:</label>
            <input type="text" id="ticker" name="ticker" value={ticker} onChange={(e) => setTicker(e.target.value)} />
            <label htmlFor="desde">Desde:</label>
            <input type="date" id="desde" name="desde" value={desde} onChange={(e) => setDesde(e.target.value)} />
            <label htmlFor="hasta">Hasta:</label>
            <input type="date" id="hasta" name="hasta" value={hasta} onChange={(e) => setHasta(e.target.value)} />
            <button type="button" onClick={handleGenerarReporte}>Generar Reporte</button>
          </form>
        </>
      );
}
export default GenerarReporte;
