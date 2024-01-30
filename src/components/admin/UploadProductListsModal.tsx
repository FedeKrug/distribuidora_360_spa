import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MayoristaType } from '../../data/listas';
import { deleteProductList } from '../../api';

type ModalType = {
    handleShow?: () => void
    show: boolean;
    handleClose: () => void;
    modalData?: MayoristaType;
}


export const UploadProductListsModal = ({ handleClose, show, modalData }: ModalType) => {

    //     const handleDeleteFile = () => {
    // deleteProductList();
    //     }


    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar Mayorista</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre del Mayorista</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Mayorista..."
                                autoFocus
                                defaultValue={modalData?.title}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <input type='file' placeholder='Seleccionar la planilla del mayorista' />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        {/* update productList */}
                        Guardar Cambios
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        {/* delete productList */}
                        Borrar Mayorista
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

