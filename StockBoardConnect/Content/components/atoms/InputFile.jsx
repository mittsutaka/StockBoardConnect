import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Icon } from '@material-ui/core';
import Color from '../../consts/Color.js';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: 'relative',
        borderRadius: '4px',
        border: `1px solid ${Color.BORDER_INPUT}`,
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(3),
        color: 'rgba(0, 0, 0, 0.50)',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: Color.BACKGROUND_COLOR_HOVER
        }
    },
    input: {
        position: 'absolute',
        width: '0.1px',
        height: '0.1px',
    }
}))

export const InputFile = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Icon>add_a_photo</Icon>
            <input className={classes.input} type='file'></input>
        </Box>
    )
}