import { createContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({children}){

    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [modalContent, setModalContent] = useState(null);
    const [activeModalProduct, setActiveModalProduct] = useState([]);

    const togglePurchaseModal = (event, product, date) => {
        setModalOpen(!modalOpen);
        setModalType('product');
        product ? setActiveModalProduct([product, date]) : setActiveModalProduct([]);
    }

    const toggleInfoModal = (value) => {
        setModalOpen(!modalOpen);
        setModalType('info');
        setModalContent(value);
    }

    return (
        <ModalContext.Provider value={{modalOpen, modalType, modalContent, activeModalProduct, togglePurchaseModal, toggleInfoModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;