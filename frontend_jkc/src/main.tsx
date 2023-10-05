import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from './routes/index.js';
import { MenuLateral }  from './shared/components/menu-lateral/MenuLateral.js';
import { AppThemeProvider, DrawerProvider } from './shared/contexts/index.js';
// import { J_Login } from './pages/index.js';
import { LoginUserProvider } from './shared/contexts/index.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppThemeProvider>
    <DrawerProvider>
      <BrowserRouter basename='/j_kmcontroller' >
        <LoginUserProvider>
          <Routes>
            {/* <Route path='/Login' element={<J_Login />} /> */}
            <Route path="*" element={
              <MenuLateral >
                <AppRoutes />
              </MenuLateral>
            } />
          </Routes>
        </LoginUserProvider>
      </BrowserRouter>
    </DrawerProvider>
  </AppThemeProvider>
  ,
);