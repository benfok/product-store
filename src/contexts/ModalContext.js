import { createContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({children}){

    const [purchaseModal, setPurchaseModal] = useState(false);
    const [activeModalProduct, setActiveModalProduct] = useState([]);

    const togglePurchaseModal = (event, product, date) => {
        setPurchaseModal(!purchaseModal);
        product ? setActiveModalProduct([product, date]) : setActiveModalProduct([]);
    }

    return (
        <ModalContext.Provider value={{purchaseModal, activeModalProduct, togglePurchaseModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;