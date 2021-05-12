import React from 'react';
import { Header } from '../../molcules/shared/Header.jsx';
import { SideMenu } from '../../molcules/shared/SideMenu.jsx';
import { Grid, Container } from '@material-ui/core';
import { Loading } from '../../molcules/shared/Loading.jsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        //visibility: 'hidden'
    },
}));

export function Layout(props) {
    const classes = useStyles();
    return (
        <>
            <Loading />
            <div className={classes.main}>
                <Header />
                <Container>
                    <Grid container>
                        <Grid item xs={2}>
                            <SideMenu />
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