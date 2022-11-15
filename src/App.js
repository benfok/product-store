import './App.css';

import Main from './components/Main/main';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import { CompareProvider } from './contexts/CompareContext';

function App() {
  return (
        <div id="react-content-container" className="container">
          <Header />
          <CompareProvider>
            <Main />
          </CompareProvider>
          <Footer />
        </div>
  );
}

export default App;
