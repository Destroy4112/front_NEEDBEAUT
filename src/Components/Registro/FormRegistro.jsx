import React from 'react';
import { FaEye } from "react-icons/fa";
import { Spinner } from "../../Utilities";

function FormRegistro({ handleChange, handleSubmit, isLoading, typeInput, mostrar, disabled }) {
    return (
        <form className="registro" onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-only">
                    <label htmlFor="propietario">Nombre del propietario</label>
                    <input type="text" id="propietario" className="input" name="propietario" required
                        onChange={handleChange} placeholder="Ingrese el nombre del propietario..." />
                </div>
            </div>
            <div className="form-group">
                <div className="input-only">
                    <label htmlFor="correo">Correo electronico</label>
                    <input type="text" id="email" className="input" name="email" required
                        onChange={handleChange} placeholder="Ingrese su correo electronico..." />
                </div>
                <div className="input-only">
                    <label htmlFor="clave">Contraseña</label>
                    <div className="input-icon">
                        <input type={typeInput} id="clave" className="input-password" placeholder="Ingrese su clave"
                            onChange={handleChange} name="password" required />
                        <button type="button" className="btn-show" onClick={mostrar}>
                            <FaEye />
                        </button>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="input-only">
                    <label htmlFor="negocio">Nombre del negocio</label>
                    <input type="text" id="negocio" className="input" name="negocio" required
                        onChange={handleChange} placeholder="Ingrese el nombre de su negocio..." />
                </div>
                <div className="input-group">
                    <label htmlFor="categoria">Categoria</label>
                    <select type="text" id="categoria" name="categoria" required
                        onChange={handleChange} defaultValue={"Seleccione..."}>
                        <option disabled>Seleccione...</option>
                        <option value="Peluqueria">Peluqueria</option>
                        <option value="Barberia">Barberia</option>
                        <option value="Cuidado Facial y Corporal">Cuidado Facial y Corporal</option>
                        <option value="Accesorios">Accesorios</option>
                        <option value="Articulos de belleza">Articulos de belleza</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <div className="input-only">
                    <label htmlFor="slogan">Eslogan</label>
                    <input type="text" id="slogan" className="input" name="slogan" required
                        onChange={handleChange} placeholder="Ingrese el slogan..." />
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="ubicacion">Numero de registro </label>
                    <input type="text" id="ubicacion" className="input" name="nit" required
                        onChange={handleChange} placeholder="Ingrese el numero de registro..." />
                </div>
                <div className="input-group">
                    <label htmlFor="registro">Ubicación</label>
                    <input type="text" id="registro" className="input" name="ubicacion"
                        onChange={handleChange} placeholder="Ingrese la ubicación..." />
                </div>
                <div className="input-group">
                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" id="telefono" className="input" name="telefono" required
                        onChange={handleChange} placeholder="Ingrese el telefono..." />
                </div>
            </div>
            <div className="form-group">

            </div>
            <button className="btn-login" disabled={disabled}>
                {isLoading ? <Spinner /> : 'registrarse'}
            </button>
        </form>
    );
}

export default FormRegistro;