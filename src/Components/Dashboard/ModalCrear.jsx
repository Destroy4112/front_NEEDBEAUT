import React, { useState } from 'react';
import { Modal } from '../../Utilities';
import { useProductContext } from '../../Context/ProductosContext';
import { useProduct } from '../../Hooks';

function ModalCrear() {

    const { handleChange, handleImagenChange, handleSubmit } = useProduct();
    const { modalIsOpen, closeModal } = useProductContext();

    return (
        <Modal handleSubmit={handleSubmit} closeModal={closeModal} modalIsOpen={modalIsOpen} titulo={"Crear Producto"}>
            <div className="group-modal">
                <label className="label-form-modal" htmlFor="titulo">Nombre </label>
                <input type="text" id="titulo" className="input-modal" name="nombre" required
                    onChange={handleChange} placeholder="Ingrese el nombre del producto..." />
            </div>
            <div className="group-modal">
                <label className="label-form-modal" htmlFor="codigo">Codigo </label>
                <input type="text" id="codigo" className="input-modal" name="codigo" required
                    onChange={handleChange} placeholder="Ingrese el codigo del producto..." />
            </div>
            <div className="group-modal">
                <label className="label-form-modal" htmlFor="imagen">Imagen </label>
                <input type="file" id="imagen" className="input-modal" name="imagen" required
                    onChange={handleImagenChange} />
            </div>
            <div className="contenedor-row">
                <div className="group-modal">
                    <label className="label-form-modal" htmlFor="precio">Precio </label>
                    <input type="text" id="precio" className="input-modal" name="precio" required
                        onChange={handleChange} placeholder="Ingrese el precio..." />
                </div>
                <div className="group-modal">
                    <label className="label-form-modal" htmlFor="cantidad">Cantidad </label>
                    <input type="text" id="cantidad" className="input-modal" name="cantidad" required
                        onChange={handleChange} placeholder="Ingrese la cantidad..." />
                </div>
            </div>
        </Modal>
    );
}

export default ModalCrear;