import React from 'react';
import AppContext from '../../../contexts/AppContext.js';
import { Login } from '../../organisms/Account/Login.jsx';
import { RightSideLayout } from '../../organisms/shared/RightSideLayout.jsx';

export const AccountLogin = (props) => {
    return (
        <AppContext.Provider value={props.antiForgeryToken}>
            <RightSideLayout>
                <Login />
            </RightSideLayout>
        </AppContext.Provider>
    )
}