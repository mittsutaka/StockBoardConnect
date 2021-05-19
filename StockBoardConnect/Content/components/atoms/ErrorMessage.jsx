import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    error: {
    }
}));

export const ErrorMessage = (props) => {
    const classes = useStyles();
    return (
        <Typography color='error' className={classes.error}>{props?.text}</Typography>
    )
}