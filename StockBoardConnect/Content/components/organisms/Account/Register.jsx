import React, { useContext } from 'react';
import { TextField, Grid, Button, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AntiForgeryToken } from '../../atoms/AntiForgeryToken.jsx';
import AppContext from '../../../contexts/AppContext.js';

const useStyles = makeStyles((theme) => ({
    textField: {
        padding: theme.spacing(2)
    },
    form: {
        minWidth: '400px',
        marginBottom: theme.spacing(1)
    },
    paper: {
        padding: theme.spacing(3)
    }
}));

export function Register(props) {
    const classes = useStyles();
    const antiForgeryToken = useContext(AppContext);
    return (
        <Paper className={classes.paper} elevation={1} square>
            <Typography variant='h6' align='center'>アカウント登録</Typography>
            <Grid className={classes.form} component='form' action='/Account/Register' method='post' autoComplete='off'>
                <AntiForgeryToken token={antiForgeryToken} />
                <Grid item xs={12} className={classes.textField}>
                    <TextField id='Email' label='メールアドレス' variant='outlined' fullWidth name='Email' autoComplete='new-password' required />
                </Grid>
                <Grid item xs={12} className={classes.textField}>
                    <TextField id='Password' label='パスワード' variant='outlined' fullWidth name='Password' type='password' autoComplete='off' required />
                </Grid>
                <Grid item xs={12} className={classes.textField}>
                    <TextField id='ConfirmPassword' label='パスワード確認' variant='outlined' fullWidth name='ConfirmPassword' type='password' required />
                </Grid>
                <Grid item xs={12} className={classes.textField}>
                    <TextField id='DisplayName' label='表示名' variant='outlined' fullWidth name='DisplayName' required />
                </Grid>
                <Grid item xs={12} className={classes.textField}>
                    <Button type='submit' variant='contained' color='primary' fullWidth size='large'>登録</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}