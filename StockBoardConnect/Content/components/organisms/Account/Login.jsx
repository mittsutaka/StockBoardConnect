import React, { useContext } from 'react';
import { TextField, Grid, Button, Paper, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AntiForgeryToken } from '../../atoms/AntiForgeryToken.jsx';
import AppContext from '../../../contexts/AppContext.js';

const useStyles = makeStyles((theme) => ({
    textField: {
        padding: theme.spacing(2)
    },
    adornment: {
        backgroundColor: 'red'
    },
    form: {
        minWidth: '400px',
        marginBottom: theme.spacing(1)
    },
    paper: {
        padding: theme.spacing(3)
    }
}));

export function Login(props) {
    const classes = useStyles();
    const antiForgeryToken = useContext(AppContext);
    return (
        <Paper className={classes.paper} elevation={1} square='true'>
            <Grid className={classes.form} component='form' action='/Account/Login' method='post'>
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
            <Grid container justify='center'>
                <Link href='/account/register' color='primary' variant='subtitle2'>新規アカウント登録</Link>
            </Grid>
        </Paper>
    )
}