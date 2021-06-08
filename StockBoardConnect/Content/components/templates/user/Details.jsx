import React from 'react';
import { Details } from '../../organisms/user/Details.jsx';
import { Layout } from '../../organisms/shared/Layout.jsx';

export const UserDetails = (props) => {
    return (
        <Layout hasRightZone overflow>
            <Details />
        </Layout>
    )
}