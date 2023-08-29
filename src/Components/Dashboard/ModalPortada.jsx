import React from 'react';
import { Modal } from '../../Utilities';
import { useTienda } from '../../Hooks';
import { useProductContext } from '../../Context/ProductosContext';

function ModalPortada() {

    const titulo = "Cambiar Foto de Portada";
    const { modalPortada, closeModalPortada } = useProductContext();
    const { handlechange, handlesubmitportada } = useTienda();

    return (
        <Modal closeModal={closeModalPortada} modalIsOpen={modalPortada} handleSubmit={handlesubmitportada} titulo={titulo}>
            <div className="group-modal">
                <label className="label-form-modal" htmlFor="imagen">Seleccione una imagen </label>
                <input type="file" onChange={handlechange} id="imagen" className="input-modal" name="imagen" required />
            </div>
        </Modal>
    );
}

export default ModalPortada;