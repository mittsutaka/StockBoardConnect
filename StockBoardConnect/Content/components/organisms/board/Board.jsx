import React, { useState } from 'react';
import { BoardList } from '../../molcules/board/BoardList.jsx';
import { BoardMain } from '../../molcules/board/BoardMain.jsx';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppContext from '../../../contexts/AppContext.js';

const useStyles = makeStyles((theme) => ({
    list: {
        width: '240px'
    },
    main: {
        flex: 1
    },
    boardList: {
        position: 'fixed',
        width: 'inherit'
    },
    wrapper: {
        height: '100%',
    }
}));

export const Board = () => {
    const classes = useStyles();
    const [companyId, setCompanyId] = useState(0);
    const setId = (id) => setCompanyId(id);
    return (
        <AppContext.Provider value={[companyId, setCompanyId]}>
            <Grid container wrap='nowrap' className={classes.wrapper}>
                <Grid item className={classes.list}>
                    <BoardList className={classes.boardList} />
                </Grid>
                <Grid item className={classes.main}>
                    <BoardMain />
                </Grid>
            </Grid>
        </AppContext.Provider>
    )
}