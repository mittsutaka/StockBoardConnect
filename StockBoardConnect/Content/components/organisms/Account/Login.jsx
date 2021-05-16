import React, { useContext } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AntiForgeryToken } from '../../atoms/AntiForgeryToken.jsx';
import AppContext from '../../../contexts/AppContext.js';

const useStyles = makeStyles((theme) => ({
    textField: {
        padding: theme.spacing(2)
    },
    left: {
        backgroundColor: '#90b4ce',
    },
    wrapper: {
        height: '100vh'
    },
    adornment: {
        backgroundColor: 'red'
    }
}));

export function Login(props) {
    const classes = useStyles();
    const antiForgeryToken = useContext(AppContext);
    return (
        <Grid container className={classes.wrapper}>
            <Grid item xs={6} className={classes.left}>
            </Grid>
            <Grid container item xs={6} alignItems='center' justify='center'>
                <Grid item xs={6} component='form' action='/Account/Login' method='post'>
                    <AntiForgeryToken token={antiForgeryToken} />
                    <Grid item xs={12} className={classes.textField}>
                        <TextField id='Email' label='メールアドレス' variant='outlined' fullWidth name='Email' />
                    </Grid>
                    <Grid item xs={12} className={classes.textField}>
                        <TextField id='Password' label='パスワード' variant='outlined' fullWidth name='Password' type='password' />
                    </Grid>
                    <Grid item xs={12} className={classes.textField}>
                        <Button type='submit' variant='contained' color='primary' fullWidth>ログイン</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}