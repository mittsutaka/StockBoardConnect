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
        borderRight: `1px solid ${Color.BORDER}`
    }
}));

export function Layout(props) {
    const classes = useStyles();
    return (
        <>
            <Loading />
            <div className={classes.main}>
                <Header />
                <Container className={classes.body}>
                    <Grid container>
                        <Grid item xs={1} sm={2} container>
                            <SideMenu className={classes.side} />
                        </Grid>
                        <Grid item xs={10}>
                            {props.children}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}