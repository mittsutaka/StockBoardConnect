import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Color from '../../../consts/Color.js';

const useStyles = makeStyles((theme) => ({
    bar: {
        backgroundColor: Color.WHITE,
        color: Color.FONT,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export function Header() {
    const classes = useStyles();
    return (
        <AppBar className={classes.bar} position='fixed'>
            <Container>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        Stock Board Connect
                </Typography>
                    <Button color='primary'>要望はこちら</Button>
                    <Link href='/Account/Login' color='primary'>Login</Link>
                </Toolbar>
            </Container>
        </AppBar>
    )
}