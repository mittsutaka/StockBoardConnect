import React from 'react';
import { Profile } from '../../organisms/user/profile.jsx';
import { Layout } from '../../organisms/shared/Layout.jsx';
import { Hidden, Grid } from '@material-ui/core';

export const UserIndex = (props) => {
    return (
        <Layout sideSelected='プロフィール' hasRightZone>
            <Profile />
        </Layout>
    )
}