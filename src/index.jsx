import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import ErrorPage from './ErrorPage';
import OverviewMap from './routes/OverviewMap';
import FirstFloor from './routes/floors/FirstFloor';

import './resources/fonts/PrivateDrive/private_drive.otf';
import './index.css';
import GroundFloor from './routes/floors/GroundFloor';
import FourthFloor from './routes/floors/FourthFloor';
import Resources from './routes/Resources';
import LegendContextProvider from './store/legend-context';
import LegendScrollContextProvider from './store/legendScroll-context';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: 'overviewMap',
        element: <OverviewMap />
    },
    {
        path: 'groundFloor',
        element: <GroundFloor />
    },
    {
        path: 'firstFloor',
        element: <FirstFloor />
    },
    {
        path: 'fourthFloor',
        element: <FourthFloor />
    },
    { path: 'resources', element: <Resources /> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <LegendContextProvider>
            <LegendScrollContextProvider>
                <RouterProvider router={router} />
            </LegendScrollContextProvider>
        </LegendContextProvider>
    </React.StrictMode>
);
