import React from 'react';
import { FaTimes } from 'react-icons/fa';
import useProduct from '../../Hooks/useProduct';
import { Spinner } from '../Spinner';

function Modal({ handleSubmit, modalIsOpen, closeModal, titulo, children }) {

    const { loadingAgregar } = useProduct();

    if (modalIsOpen) {
        return (
            <div className="dialog-modal">
                <div className="modal">
                    <div className="header-modal">
                        <h3 className='title-modal'>{titulo}</h3>
                        <button className="close-modal" onClick={closeModal}> <FaTimes /> </button>
                    </div>
                    <div className="content-modal">
                        {children}
                    </div>
                    <div className="footer-modal">
                        <button className="buton-cancel" onClick={closeModal}> Cancelar </button>
                        <button className="buton-cancel" onClick={handleSubmit}> {loadingAgregar ? <Spinner /> : "GUARDAR"} </button>
                    </div>
                </div>
            </div >
        );
    }
}

export default Modal;