import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MayoristaType } from '../../data/listas';
import { createNewProductList, deleteProductList, updateProductList } from '../../api/productLists/productListsApi';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

type ModalType = {
    handleShow?: () => void
    show: boolean;
    handleClose: () => void;
    modalData?: MayoristaType;
    create?: boolean;
    dataId: number;
    title?: string;
}


export const ProductListModal = ({ handleClose, show, dataId, create = false }: ModalType) => {

    const [newList, setNewList] = useState({
        title: "",
        photo_url: "",
    })
    const { title, photo_url } = newList;
    const { file, formState, onInputChange, onResetForm } = useForm({
        title,
        file: ""

    });
    const newListId = dataId + 1;

    // console.log({ title, dataId })
    const handleDeleteFile = () => {
        deleteProductList(dataId);
        handleClose();
    }

    const handleProductList = () => {
        if (create) {
            //crear nueva nota.
            // createNewProductList();
            console.log("new product list -> falta apuntar a la api")
        }
        else {
            //actualizar nota.
            updateProductList(newListId);
            console.log("updated product list -> falta apuntar a la api")
        }
        handleClose();
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{create ? "Crear una nueva lista" : "Actualizar lista"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre del Mayorista</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Mayorista..."
                                autoFocus
                                onChange={onInputChange}
                                value={title}
                                name='title'
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <input type='file' />
                            {/* <FileDragArea /> */}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleProductList}>
                        {/* create ? update productList : post productList */}

                        Guardar Cambios
                    </Button>
                    {
                        !create ?
                            <Button variant="danger" onClick={handleDeleteFile}>
                                Borrar Mayorista
                            </Button>
                            : null
                    }

                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

