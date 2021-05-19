import React from 'react';
import { RightSideLayout } from '../../organisms/shared/RightSideLayout.jsx';
import { Register } from '../../organisms/Account/Register.jsx';
import AppContext from '../../../contexts/AppContext.js';

export const AccountRegister = ({ antiForgeryToken, vm }) => {
    const model = JSON.parse(vm);
    return (
        <AppContext.Provider value={[antiForgeryToken, model]}>
            <RightSideLayout>
                <Register />
            </RightSideLayout>
        </AppContext.Provider>
    )
}