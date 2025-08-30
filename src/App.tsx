import { useEffect, useState } from 'react';
import './App.css'
import Home from './pages/home/Home'
import { useLocation } from 'react-router-dom';

async function loadPreline() {
  return import('preline/dist/index.js');
}

function App() {

  const location = useLocation();

  useEffect(() => {
    const initPreline = async () => {
      await loadPreline();

      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === 'function'
      ) {
        window.HSStaticMethods.autoInit();
      }
    };

    initPreline();
  }, [location.pathname]);

    const [theme, _] = useState("light");

  useEffect(() => {
    import(`./themes/${theme}.css`);
  }, [theme]);


  return (
    <div className=''>
      <Home />
    </div>
  )
}

export default App
