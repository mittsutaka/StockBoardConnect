import React from 'react';
import { Details } from '../../organisms/user/Details.jsx';
import { Layout } from '../../organisms/shared/Layout.jsx';

export const UserDetails = (props) => {
    console.log(props.id);
    return (
        <Layout hasRightZone overflow>
            <Details userId={props.id} />
        </Layout>
    )
}