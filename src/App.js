import './App.css';

import { useContext } from 'react';
import ModalContext from './contexts/ModalContext';
import Main from './components/Main/main';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import PurchaseModal from './components/Main/purchaseModal';
import { CompareProvider } from './contexts/CompareContext';

function App() {

  const {purchaseModal, togglePurchaseModal, activeModalProduct} = useContext(ModalContext); 

  return (
        <div id="react-content-container" className="container">
            {purchaseModal && 
              <PurchaseModal
                  togglePurchaseModal={togglePurchaseModal}
                  product={activeModalProduct[0]}
                  date={activeModalProduct[1]}
              />
            }  
          <Header />
          <CompareProvider>
            <Main />
          </CompareProvider>
          <Footer />
        </div>
  );
}

export default App;
