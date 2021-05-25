import React from 'react';
import { BoardList } from '../../molcules/board/BoardList.jsx';
import { BoardMain } from '../../molcules/board/BoardMain.jsx';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    list: {
        width: '240px'
    },
    main: {
        flex: 1
    },
    boardList: {
        position: 'fixed',
        width:'inherit'
    }
}));

export const Board = () => {
    const classes = useStyles();
    return (
        <Grid container wrap='nowrap'>
            <Grid item className={classes.list}>
                <BoardList className={classes.boardList} />
            </Grid>
            <Grid item className={classes.main}>
                <BoardMain />
            </Grid>
        </Grid>
    )
}