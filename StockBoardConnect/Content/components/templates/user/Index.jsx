import React from 'react';
import { Profile } from '../../organisms/user/profile.jsx';
import { Layout } from '../../organisms/shared/Layout.jsx';

export const UserIndex = (props) => {
    return (
        <Layout sideSelected='プロフィール'>
            <Profile />
        </Layout>
    )
}