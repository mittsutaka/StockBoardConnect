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
    wrapper: {
        height: '100%',
    }
}));

export const Board = () => {
    const classes = useStyles();
    const [company, setCompany] = useState({
        id: "",
        name: ""
    });

    return (
        <AppContext.Provider value={[company, setCompany]}>
            <Grid container wrap='nowrap' className={classes.wrapper}>
                <Grid item className={classes.list}>
                    <BoardList />
                </Grid>
                <Grid item className={classes.main}>
                    {
                        company.id &&
                        <BoardMain />
                    }
                </Grid>
            </Grid>
        </AppContext.Provider>
    )
}