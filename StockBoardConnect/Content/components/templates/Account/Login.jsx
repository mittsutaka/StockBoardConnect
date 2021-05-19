import React from 'react';
import AppContext from '../../../contexts/AppContext.js';
import { Login } from '../../organisms/Account/Login.jsx';
import { RightSideLayout } from '../../organisms/shared/RightSideLayout.jsx';

export const AccountLogin = ({ antiForgeryToken, vm }) => {
    const model = JSON.parse(vm);
    return (
        <AppContext.Provider value={[antiForgeryToken, model]}>
            <RightSideLayout>
                <Login />
            </RightSideLayout>
        </AppContext.Provider>
    )
}