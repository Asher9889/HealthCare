import { useEffect, useState } from 'react';
import './App.css'
import Home from './pages/home/Home'
import { Route, Routes, useLocation } from 'react-router-dom';
import routes from './routes';
import { PageNotFound } from './components';
import { Toaster } from 'sonner';

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
      <Toaster richColors position="top-center" closeButton expand={true} />
      <Routes>
        {routes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            element={r.element ? <r.element /> : <PageNotFound />}
          />
        ))}

        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Catch-all route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
