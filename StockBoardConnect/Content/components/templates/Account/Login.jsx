import React from 'react';
import { Login } from '../../organisms/Account/Login.jsx';

export function AccountLogin(props) {
    return (
        <Login antiForgeryToken={props.antiForgeryToken} />
    )
}