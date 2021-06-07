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
        width: '128px',
        height: '128px',
    },
    input: {
        position: 'absolute',
        width: '0.1px',
        height: '0.1px',
    },
    label: {
        display: 'flex',
        justifyContent: 'center',
        color: 'rgba(0, 0, 0, 0.50)',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: Color.BACKGROUND_COLOR_HOVER,
            opacity: '0.8'
        }
    },
    img: {
        width: '128px',
        height: '128px',
        objectFit: 'cover',
    },
    icon: {
        position: 'absolute',
    }
}))

export const InputFile = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <label className={classes.label} htmlFor='fileInput'>
                {
                    props.imgSrc && <img className={classes.img} src={props.imgSrc} />
                }
                <Icon className={classes.icon}>add_a_photo</Icon>
            </label>
            <input id='fileInput' multiple className={classes.input} type='file' onChange={props.onChange} />
        </Box>
    )
}