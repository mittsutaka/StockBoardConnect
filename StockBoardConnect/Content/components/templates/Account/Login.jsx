import React from 'react';
import AppContext from '../../../contexts/AppContext.js';
import { Login } from '../../organisms/Account/Login.jsx';

export function AccountLogin(props) {
    return (
        <AppContext.Provider value={props.antiForgeryToken}>
            <Login />
        </AppContext.Provider>
    )
}