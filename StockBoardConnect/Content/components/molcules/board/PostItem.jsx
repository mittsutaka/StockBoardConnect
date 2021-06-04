import React from 'react';
import { Card, CardContent, Typography, CardActions, Grid, IconButton, Box, Button, Avatar } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        minHeight: theme.spacing(8),
    },
    header: {
        padding: theme.spacing(0.5)
    },
    name: {
        alignItems: 'center'
    },
    at: {
        paddingRight: theme.spacing(1),
        textAlign: 'right'
    },
    message: {
        padding: '8px 8px 0 8px'
    },
    bottom: {
        justifyContent: 'flex-end',
        padding: '4px'
    },
    thumb: {
        minWidth: theme.spacing(8)
    },
    reply: {
        color: 'rgba(0, 0, 0, 0.54)'
    },
    avatar: {
        width: theme.spacing(3.5),
        height: theme.spacing(3.5),
        marginRight: '4px'
    },
    iconButton: {
        marginRight: '4px'
    }
}));

export const PostItem = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <Grid container alignItems='center' className={classes.header}>
                <Grid container item xs={6} className={classes.name}>
                    <Avatar alt={props.postData.userName} className={classes.avatar} src={props.postData.avatarFilePath}></Avatar>
                    <Typography variant='subtitle2'>{props.postData.userName}</Typography>
                </Grid>
                <Grid item xs={6} className={classes.at}>
                    <Typography variant='overline'>{props.postData.at}</Typography>
                </Grid>
            </Grid>
            <CardContent className={classes.message}>
                <Typography variant='body2'>{props.postData.text}</Typography>
            </CardContent>
            <CardActions className={classes.bottom}>
                <Box component='span' className={classes.thumb}>
                    <IconButton size='small' className={classes.iconButton}><Icon fontSize='small'>thumb_up_alt</Icon></IconButton>
                    <Typography variant='caption'>{props.postData.good}</Typography>
                </Box>
                <Box component='span' className={classes.thumb}>
                    <IconButton size='small' className={classes.iconButton}><Icon fontSize='small'>thumb_down_alt</Icon></IconButton>
                    <Typography variant='caption'>{props.postData.bad}</Typography>
                </Box>
                <Box component='span'>
                    <Button size='small' startIcon={<Icon fontSize='small'>reply</Icon>} className={classes.reply}>返信</Button>
                </Box>
            </CardActions>
        </Card>
    )
}