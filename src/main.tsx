import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import { Route, Switch } from "wouter";
import Index from './routes/Index.tsx';
import GiftPage from './routes/GiftPage.tsx';
import _404Page from './routes/404.tsx';

// feature flag to keep the boxes closed until christmas
const IS_CHRISTMAS = (new Date().getMonth() === 11 && new Date().getDate() >= 24) || new Date().getFullYear() === 2024;
const IS_DEV = window.location.hostname === 'localhost';
export const ARE_BOXES_OPEN = IS_CHRISTMAS || IS_DEV;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Switch>
            <Route path="/santaponk/" component={Index} />

            {ARE_BOXES_OPEN && (
                <Route path="/santaponk/:receiver" component={GiftPage} />
            )}

            <Route component={_404Page} />
        </Switch>
    </React.StrictMode>,
);
