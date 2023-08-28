import React from 'react';
import { Spinner } from '../../Utilities';
import { FaEye } from 'react-icons/fa';

function Form({ clase, handleChange, handleSubmit, usuario, isLoading, mostrar, typeInput, disabled }) {
    return (
        <form action="" className={clase} onSubmit={handleSubmit}>
            <label htmlFor="usuario">Usuario</label>
            <input type="text" id="usuario" className="input" placeholder="Ingrese su usuario"
                value={usuario.email} onChange={handleChange} name="email" />

            <label htmlFor="clave">Clave</label>
            <div className="input-icon">
                <input type={typeInput} id="clave" className="input-password" placeholder="Ingrese su clave"
                    value={usuario.password} onChange={handleChange} name="password" />
                <button type="button" className="btn-show" onClick={mostrar} disabled={disabled}>
                    <FaEye />
                </button>
            </div>
            <button className="btn-login" disabled={disabled}>{isLoading ? <Spinner /> : 'Ingresar'}</button>
        </form>
    );
}

export default Form;