import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import { Route } from "wouter";
import Index from './routes/Index.tsx';
import SmeadPage from './routes/SmeadPage.tsx';
import SanaPage from './routes/SanaPage.tsx';
import NemuPage from './routes/NemuPage.tsx';
import DoagPage from './routes/DoagPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Route path="/santaponk/" component={Index} />
        <Route path="/santaponk/doag" component={DoagPage} />
        <Route path="/santaponk/nemu" component={NemuPage} />
        <Route path="/santaponk/sana" component={SanaPage} />
        <Route path="/santaponk/smead" component={SmeadPage} />
    </React.StrictMode>,
);
