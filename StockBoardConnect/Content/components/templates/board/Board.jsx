﻿import React from 'react';
import { Board } from '../../organisms/board/Board.jsx';
import { Layout } from '../../organisms/shared/Layout.jsx';

export const BoardIndex = (props) => {
    return (
        <Layout>
            <Board companyId={props.id} />
        </Layout>
    )
}