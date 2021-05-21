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
        paddingTop: "64px",
        minHeight: "100vh"
    },
    side: {
        borderRight: `1px solid ${Color.BORDER}`,
        width: 'auto'
    },
    content: {
        flex: 1
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
                            <SideMenu />
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