import React from 'react';
import { BoardList } from '../../molcules/board/BoardList.jsx';
import { BoardMain } from '../../molcules/board/BoardMain.jsx';
import { Grid } from '@material-ui/core';

export function Board() {
    return (
        <Grid container>
            <Grid item xs={3}>
                <BoardList />
            </Grid>
            <Grid item xs={9}>
                <BoardMain />
            </Grid>
        </Grid>
    )
}