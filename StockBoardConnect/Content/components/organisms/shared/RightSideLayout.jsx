import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh'
    },
    left: {
        backgroundColor: '#90b4ce',
    },
    right: {}
}));

export function RightSideLayout(props) {
    const classes = useStyles();
    return (
        <Grid container className={classes.wrapper}>
            <Grid item xs={6} className={classes.left}>
            </Grid>
            <Grid container item xs={6} alignItems='center' justify='center'>
                {props.children}
            </Grid>
        </Grid>
    )
}