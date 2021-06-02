import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Link, Icon, Box } from '@material-ui/core';
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        marginRight: theme.spacing(1)
    }
}));

export const Header = (props) => {
    const classes = useStyles();
    return (
        <AppBar className={classes.bar} position='fixed'>
            <Container>
                <Toolbar>
                    <Box className={classes.title}>
                        <Icon fontSize='large' className={classes.logo}>account_balance</Icon>
                        <Typography variant='h6'>SHARE STOCK</Typography>
                    </Box>
                    <Typography variant='subtitle1'>{props.userName}</Typography>
                    <Button color='primary'>要望はこちら</Button>
                    <Link href='/Account/Login' color='primary'>Login</Link>
                </Toolbar>
            </Container>
        </AppBar>
    )
}