import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import { Route } from "wouter";
import Index from './routes/Index.tsx';
import SmeadPage from './routes/SmeadPage.tsx';
import SanaPage from './routes/SanaPage.tsx';
import NemuPage from './routes/NemuPage.tsx';
import DoagPage from './routes/DoagPage.tsx';

// feature flag to keep the boxes closed until christmas
const IS_CHRISTMAS = new Date().getMonth() === 11 && new Date().getDate() >= 24;
const IS_DEV = window.location.hostname === 'localhost';
export const ARE_BOXES_OPEN = IS_CHRISTMAS || IS_DEV;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Route path="/santaponk/" component={Index} />

        {ARE_BOXES_OPEN && (
            <>
                <Route path="/santaponk/doag" component={DoagPage} />
                <Route path="/santaponk/nemu" component={NemuPage} />
                <Route path="/santaponk/sana" component={SanaPage} />
                <Route path="/santaponk/smead" component={SmeadPage} />
            </>
        )}

    </React.StrictMode>,
);
