import { Container, Grid, Hidden, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Color from '../../../consts/Color.js';
import AppContext from '../../../contexts/AppContext.js';
import { Alert } from '../../atoms/Alert.jsx';
import { Header } from '../../molcules/shared/Header.jsx';
import { Loading } from '../../molcules/shared/Loading.jsx';
import { RightZone } from '../../molcules/shared/RightZone.jsx';
import { SideMenu } from '../../molcules/shared/SideMenu.jsx';

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

const initialSnackState = {
    isOpen: false,
    message: '',
    type: ''
}

export const Layout = (props) => {
    const p = { overflow: props.overflow ? 'auto' : 'inherit' };
    const classes = useStyles(p);
    const [user, setUser] = useState();
    const [snack, setSnack] = useState(initialSnackState);

    useEffect(() => {
        const fecthAuthUser = async () => {
            const url = '/Api/Users/me';
            const res = await axios.get(url);
            setUser(res.data);
        }
        fecthAuthUser();
    }, [])

    const handleSnackClose = () => {
        setSnack(initialSnackState);
    }

    return (
        <AppContext.Provider value={[user, setUser, snack, setSnack]} >
            <Router>
                <Loading />
                <div className={classes.main}>
                    <Header userName={user?.displayName} avatarFilePath={user ? `/${user?.avatarFilePath}` : ""} />
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
                <Snackbar open={snack.isOpen} autoHideDuration={3000} onClose={handleSnackClose}>
                    <Alert type={snack.type} message={snack.message} />
                </Snackbar>
            </Router>
        </AppContext.Provider>
    )
}