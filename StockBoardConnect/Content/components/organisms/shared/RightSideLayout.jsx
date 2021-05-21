import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Color from '../../../consts/Color.js';
import { ServerStyleSheets } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh'
    },
    left: {
        backgroundColor: '#90b4ce',
        color: Color.WHITE,
        padding: theme.spacing(5)
    },
    title: {
        marginBottom: theme.spacing(2)
    },
    right: {}
}));

export const RightSideLayout = (props) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.wrapper}>
            <Grid container item xs={6} className={classes.left} justify='center' direction='column'>
                <Typography variant='h4' className={classes.title}>
                    Stockerへようこそ
                </Typography>
                <Typography variant='body1' className={classes.body}>
                    Stockerで株式投資仲間と楽しい会話をし、友達を増やしましょう。そして、投資生活をもっと楽しみましょう。
                </Typography>
            </Grid>
            <Grid container item xs={6} alignItems='center' justify='center'>
                {props.children}
            </Grid>
        </Grid>
    )
}