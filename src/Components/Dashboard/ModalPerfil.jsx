import React from 'react';
import { Modal } from '../../Utilities';
import { useTienda } from '../../Hooks';
import { useProductContext } from '../../Context/ProductosContext';

function ModalPerfil() {

    const { modalPerfil, closeModalPerfil } = useProductContext();
    const { handlechange, handlesubmitperfil } = useTienda();
    const titulo = "Cambiar Foto de Perfil";

    return (
        <Modal closeModal={closeModalPerfil} modalIsOpen={modalPerfil} handleSubmit={handlesubmitperfil} titulo={titulo}>
            <div className="group-modal">
                <label className="label-form-modal" htmlFor="imagen">Seleccione una imagen </label>
                <input type="file" onChange={handlechange} id="imagen" className="input-modal" name="imagen" required />
            </div>
        </Modal>
    );
}

export default ModalPerfil;