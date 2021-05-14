import React from 'react';
import { BoardList } from '../../molcules/board/BoardList.jsx';
import { BoardMain } from '../../molcules/board/BoardMain.jsx';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 'auto'
    },
    main: {
        flex: 1
    }
}));

export function Board() {
    const classes = useStyles();
    return (
        <Grid container wrap='nowrap'>
            <Grid item className={classes.list}>
                <BoardList />
            </Grid>
            <Grid item className={classes.main}>
                <BoardMain />
            </Grid>
        </Grid>
    )
}