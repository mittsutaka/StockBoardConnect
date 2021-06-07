import React from 'react';
import { Grid, Typography, Avatar, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: theme.spacing(3),
    },
    paper: {
        height: '360px',
        marginBottom: theme.spacing(2)
    }
}));

export const RightZone = (props) => {
    const classes = useStyles();

    return (
        <Grid className={classes.wrapper}>
            <Paper className={classes.paper} ></Paper>
            <Paper className={classes.paper} ></Paper>
            <Paper className={classes.paper} ></Paper>
        </Grid>
    )
}