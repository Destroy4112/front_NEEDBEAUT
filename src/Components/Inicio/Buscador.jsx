import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Buscador({ buscador, handlechange, buscar }) {
    return (
        <div className="buscador">
            <input type="text" className="busqueda" placeholder="¿Qué estás buscando?" onChange={handlechange} />
            <button className="searcher" value={buscador} onClick={buscar}><FaSearch /></button>
        </div>
    );
}

export default Buscador;