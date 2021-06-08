import { Box, Typography, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Color from '../../consts/Color';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: props => props.backgroundColor,
        color: temp => temp.color,
        padding: theme.spacing(1),
        borderRadius: '4px',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    icon: {
        marginRight: theme.spacing(2)
    }
}))

const data = {
    'success': {
        color: Color.WHITE,
        backgroundColor: Color.BACKGROUND_COLOR_SUCCESS,
        icon: 'task_alt',
    },
    'error': {
        color: Color.WHITE,
        backgroundColor: Color.BACKGROUND_COLOR_ERROR,
        icon: 'error_outline',
    },
    'warning': {
        color: Color.WHITE,
        backgroundColor: Color.BACKGROUND_COLOR_WARNING,
        icon: 'warning',
    },
}

export const Alert = (props) => {
    const classes = useStyles(data[props.type]);

    return (
        <Box className={classes.wrapper}>
            <Icon className={classes.icon} fontSize='small'>{data[props.type]?.icon}</Icon>
            <Typography variant='subtitle1'>{props.message}</Typography>
        </Box>
    )
}
