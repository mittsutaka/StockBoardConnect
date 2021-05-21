import ReactLoading from 'react-loading';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        //visibility: 'visible',
        visibility: 'hidden'
    },
    loading: {
        fill: 'red !important',
    }
}));

export const Loading = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ReactLoading type="spin" className={classes.loading} />
            <Typography>now loading...</Typography>
        </div>
    )
}