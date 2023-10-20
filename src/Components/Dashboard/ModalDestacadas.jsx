import React from 'react';
import { Modal } from '../../Utilities';
import { useTienda } from '../../Hooks';
import { useProductContext } from '../../Context/ProductosContext';

function ModalDestacadas() {

    const { modalDestacadas, closeModalDestacadas } = useProductContext();
    const { handlechange, handlesubmitdestacada } = useTienda();
    const titulo = "Agregar imagen destacada";

    return (
        <Modal closeModal={closeModalDestacadas} modalIsOpen={modalDestacadas} handleSubmit={handlesubmitdestacada} titulo={titulo}>
            <div className="group-modal">
                <label className="label-form-modal" htmlFor="imagen">Seleccione una imagen </label>
                <input type="file" onChange={handlechange} id="imagen" className="input-modal" name="imagen" required />
            </div>
        </Modal>
    );
}

export default ModalDestacadas;