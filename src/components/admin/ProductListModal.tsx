import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MayoristaType } from '../../data/listas';
import { createNewProductList, deleteProductList, updateProductList } from '../../api/productLists/productListsApi';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { FileDragArea } from '../FileDragArea';

type ModalType = {
    handleShow?: () => void
    show: boolean;
    handleClose: () => void;
    modalData?: MayoristaType;
    create?: boolean;
    dataId: number;
    title?: string;
}

type ProductListTypeDB = {
    title: string;
    file: string;
    id?: number;
}

const initialValue = {
    title: "",
    file: "",
    id: 0,
}

export const ProductListModal = ({ handleClose, show, dataId, create = false }: ModalType) => {

    const [newList, setNewList] = useState<ProductListTypeDB>(initialValue);



    const { title, file, onInputChange } = useForm({
        title: "",
        file: ""

    });
    const newListId = dataId + 1;

    // console.log({ title, dataId })
    const handleDeleteFile = () => {
        deleteProductList(dataId);
        handleClose();
    }

    const handleChangeProductList = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        onInputChange(event);
        setNewList({
            title,
            file
        })
    }

    const handleProductList = async () => {
        if (create) {
            //crear nueva nota.
            // createNewProductList();
            const response = await createNewProductList(newList)
            console.log({ response })
            console.log("new product list -> falta apuntar a la api")
        }
        else {
            //actualizar nota.
            updateProductList(dataId);
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
                                onChange={handleChangeProductList}
                                value={title}
                                name='title'
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <input type='file' value={file} name='file' onChange={handleChangeProductList} />
                            <FileDragArea />
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

