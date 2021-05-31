import React, { useState } from 'react';
import { Header } from '../../molcules/shared/Header.jsx';
import { SideMenu } from '../../molcules/shared/SideMenu.jsx';
import { Grid, Container } from '@material-ui/core';
import { Loading } from '../../molcules/shared/Loading.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Color from '../../../consts/Color.js';
import AppContext from '../../../contexts/AppContext.js';
import { useEffect } from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    main: {
        //visibility: 'hidden',
        color: Color.FONT
    },
    body: {
        paddingTop: '64px',
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        overflow: 'hidden'
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
    }
}));

export const Layout = (props) => {
    const classes = useStyles();
    const [user, setUser] = useState();
    useEffect(() => {
        const fecthAuthUser = async () => {
            const url = '/Api/Users/me';
            const res = await axios.get(url);
            setUser(res.data);
        }
        fecthAuthUser();
    }, [])
    return (
        <AppContext.Provider value={[user, setUser]} >
            <Loading />
            <div className={classes.main}>
                <Header userName={user?.displayName} />
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
        </AppContext.Provider>
    )
}