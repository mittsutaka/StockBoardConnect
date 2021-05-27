import React from 'react';
import { Header } from '../../molcules/shared/Header.jsx';
import { SideMenu } from '../../molcules/shared/SideMenu.jsx';
import { Grid, Container } from '@material-ui/core';
import { Loading } from '../../molcules/shared/Loading.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Color from '../../../consts/Color.js';

const useStyles = makeStyles((theme) => ({
    main: {
        //visibility: 'hidden',
        color: Color.FONT
    },
    body: {
        paddingTop: '64px',
        minHeight: '100vh',
        display: 'flex',
        alignItems:'stretch'
    },
    side: {
        borderRight: `1px solid ${Color.BORDER}`,
        width: '240px',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            width: '80px',
        },
    },
    content: {
        flex: 1
    },
    sideMenu: {
        position: 'fixed'
    }
}));

export const Layout = (props) => {
    const classes = useStyles();
    return (
        <>
            <Loading />
            <div className={classes.main}>
                <Header />
                <Container className={classes.body}>
                    <Grid container wrap='nowrap'>
                        <Grid item container className={classes.side} >
                            <SideMenu className={classes.sideMenu} />
                        </Grid>
                        <Grid item className={classes.content}>
                            {props.children}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}