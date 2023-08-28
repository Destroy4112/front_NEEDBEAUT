import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../Redux';
import { PrivateRoutes, PublicRoutes } from '../Models';
import { AuthGuard } from '../Utilities';
import { CategoriasPage, DashboardPage, InicioPage, LoginPage, NotFoundPage, RegistroPage, TiendaPage } from '../Pages';

function Rutas() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path={PublicRoutes.INICIO} element={<InicioPage />} />
                    <Route path={PublicRoutes.LOGIN} element={<LoginPage />} />
                    <Route path={PublicRoutes.REGISTER} element={<RegistroPage />} />
                    <Route path={`${PublicRoutes.CATEGORIAS}/:categoria`} element={<CategoriasPage />} />
                    <Route path={`${PublicRoutes.TIENDA}/:id`} element={<TiendaPage />} />
                    <Route element={<AuthGuard />}>
                        <Route path={PrivateRoutes.DASHBOARD} element={<DashboardPage />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default Rutas;