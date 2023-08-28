import React from 'react';
import { Modal } from '../../Utilities';
import { useTienda } from '../../Hooks';

function ModalPortada({ closeModal, modalIsOpen }) {

    const titulo = "Cambiar Foto de Portada";
    const { handlechange, handlesubmitportada, open } = useTienda();

    return (
        <Modal closeModal={closeModal} modalIsOpen={modalIsOpen} handleSubmit={handlesubmitportada} titulo={titulo}>
            <div className="group-modal">
                <label className="label-form-modal" htmlFor="imagen">Seleccione una imagen </label>
                <input type="file" onChange={handlechange} id="imagen" className="input-modal" name="imagen" required />
            </div>
        </Modal>
    );
}

export default ModalPortada;