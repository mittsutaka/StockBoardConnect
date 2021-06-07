import React, { useState } from 'react';
import { Header } from '../../molcules/shared/Header.jsx';
import { SideMenu } from '../../molcules/shared/SideMenu.jsx';
import { Grid, Container, Hidden } from '@material-ui/core';
import { Loading } from '../../molcules/shared/Loading.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Color from '../../../consts/Color.js';
import AppContext from '../../../contexts/AppContext.js';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RightZone } from '../../molcules/shared/RightZone.jsx';

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
        flex: 1,
        display: 'flex',
        overflow: p => p.overflow
    },
    rightZone: {
    }
}));

export const Layout = (props) => {
    const p = { overflow: props.overflow ? 'auto' : 'inherit' };
    const classes = useStyles(p);
    const [user, setUser] = useState();
    useEffect(() => {
        const fecthAuthUser = async () => {
            const url = '/Api/Users/me';
            const res = await axios.get(url);
            console.log(res.data);

            setUser(res.data);
        }
        fecthAuthUser();
    }, [])
    return (
        <AppContext.Provider value={[user, setUser]} >
            <Router>
                <Loading />
                <div className={classes.main}>
                    <Header userName={user?.displayName} avatarFilePath={user?.avatarFilePath} />
                    <Container className={classes.body}>
                        <Grid container wrap='nowrap'>
                            <Grid item container className={classes.side} >
                                <SideMenu sideSelected={props.sideSelected} />
                            </Grid>
                            <Grid item className={classes.content} >
                                <Grid item sm={12} md={props.hasRightZone ? 8 : 12}  >
                                    {props.children}
                                </Grid>
                                {
                                    props.hasRightZone &&
                                    <Grid className={classes.rightZone} item md={4} >
                                        <Hidden smDown>
                                            <RightZone />
                                        </Hidden>
                                    </Grid>
                                }
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Router>
        </AppContext.Provider>
    )
}