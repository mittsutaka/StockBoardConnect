import React from 'react';
import { RightSideLayout } from '../../organisms/shared/RightSideLayout.jsx';
import { Register } from '../../organisms/Account/Register.jsx';
import AppContext from '../../../contexts/AppContext.js';

export const AccountRegister = (props) => {
    return (
        <AppContext.Provider value={props.antiForgeryToken}>
            <RightSideLayout>
                <Register />
            </RightSideLayout>
        </AppContext.Provider>
    )
}