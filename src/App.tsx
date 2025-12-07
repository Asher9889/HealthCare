import { useEffect, useState } from 'react';
import './App.css'
import Home from './pages/home/Home'
import { Route, Routes, useLocation } from 'react-router-dom';
import routes, { cityWiseRoutes } from './routes';
import { ContactSection, ContactUsFloating, Footer, Header, PageNotFound, CityGuard } from './components';
import { Toaster } from 'sonner';
import BlogViewPage from './pages/Patient/english-blog/blog/BlogView';
import { CityWiseHomePage } from './pages';

async function loadPreline() {
  return import('preline/dist/index.js');
}

function App() {

  const location = useLocation();
  // needed for FAQ
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
      <Header />
      <Toaster richColors position="top-center" closeButton expand={true} />
      <ContactUsFloating />
      <Routes>
        {/* Nav Bar routes */}
        {routes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            element={r.element ? <r.element /> : <PageNotFound />}
          />
        ))}
        {/* City Wise routes */}
        {cityWiseRoutes?.length > 0 && cityWiseRoutes.map((r, idx) => (
          <Route
            key={r?.path + idx}
            path={r?.path}
            element={r?.element ? (
              <CityGuard>
                <r.element />
              </CityGuard>
            ) : "gh"}
          />
        ))}
        <Route path="/blogs/:slug" element={<BlogViewPage />} />

        {/* Home Route */}
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={
          <CityGuard>
            <CityWiseHomePage />
          </CityGuard>
        } />

        {/* Catch-all route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
