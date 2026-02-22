import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { playlist, historial } from './Estructuras';

const MusicPage = () => {
    const [nodo, setNodo] = useState(playlist.cabeza);
    return (<div style={{padding:'20px'}}><h2>Reproductor (Lista Simple)</h2>{nodo ? (<div><h3>{nodo.titulo}</h3><p>{nodo.artista}</p><button onClick={() => setNodo(nodo.siguiente)}>Siguiente ⏭️</button></div>) : <p>Fin de la lista</p>}<br/><Link to='/history'><button>Ir a Historial</button></Link></div>);
};

const HistoryPage = () => {
    const [pag, setPag] = useState(historial.actual);
    return (<div style={{padding:'20px'}}><h2>Historial (Lista Doble)</h2>{pag ? (<div><h3>URL: {pag.url}</h3><button onClick={() => setPag(pag.anterior)} disabled={!pag.anterior}>⬅️ Atrás</button> <button onClick={() => setPag(pag.siguiente)} disabled={!pag.siguiente}>Adelante ➡️</button></div>) : <p>Historial vacío</p>}<br/><Link to='/'><button>Volver al Reproductor</button></Link></div>);
};

export default function App() { return <BrowserRouter><Routes><Route path='/' element={<MusicPage />} /><Route path='/history' element={<HistoryPage />} /></Routes></BrowserRouter>; }
