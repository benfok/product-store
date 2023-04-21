import './App.css';

import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModalContext from './contexts/ModalContext';
import Main from './components/Main/main';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import PurchaseModal from './components/Main/purchaseModal';
import InfoModal from './components/Main/infoModal';
import { GrClose } from 'react-icons/gr';
import { CompareProvider } from './contexts/CompareContext';

function App() {

  const {modalOpen, modalType, modalContent, togglePurchaseModal, activeModalProduct} = useContext(ModalContext); 

  return (
        <div id="react-content-container" className="container">
            {modalOpen &&  
              <div className="modalOuter" id="modal-wrapper" onClick={event => togglePurchaseModal(event)}>
                <section className='modal' onClick={event => {event.stopPropagation();}}>
                    <div className="modalCloseIcon" onClick={event => togglePurchaseModal(event)}>
                        <GrClose />
                    </div>         
                    {modalType === 'product' &&
                      <PurchaseModal
                          togglePurchaseModal={togglePurchaseModal}
                          product={activeModalProduct[0]}
                          date={activeModalProduct[1]}
                      />
                    }  
                    {modalType === 'info' &&
                      <InfoModal 
                          content={modalContent}
                      />
                    }
                </section>
              </div>
            }  
          <Router basename='product-store'>         
            <Header />
            <CompareProvider>
              <Routes>
                <Route 
                  path="/" 
                  element={<Main />} 
                />
                <Route 
                  path="*" 
                  element={<Main />} 
                />
              </Routes>
            </CompareProvider>
            <Footer />
          </Router>
        </div>
  );
}

export default App;
