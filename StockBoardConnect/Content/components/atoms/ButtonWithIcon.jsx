import { Button, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(1)
    }
}));

export const ButtonWithIcon = (props) => {
    const classes = useStyles();
    return (
        <Button onClick={props.onClick} variant={props.variant} size={props.size} color={props.color} className={props.className}>
            <Icon className={classes.icon} fontSize={props.iconSize}>{props.icon}</Icon>
            {props.children}
        </Button>
    )
}
