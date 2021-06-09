import { Avatar, Box, Divider, Grid, List, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../../contexts/AppContext.js';
import { ButtonWithIcon } from '../../atoms/ButtonWithIcon.jsx';
import { PostItem } from '../../molcules/board/PostItem.jsx';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: '128px',
        height: '128px'
    },
    wrapper: {
        padding: theme.spacing(3),
        //width: '640px'
    },
    item: {
        marginBottom: theme.spacing(2)
    },
    avatarWrapper: {
        flex: 1
    },
    editWrapper: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    listItem: {
        width: "100%",
    },
    description: {
        whiteSpace: 'pre-wrap',
    }
}));

export const Details = (props) => {
    const classes = useStyles();
    const [posts, setPosts] = useState();
    const [user, setUser] = useContext(AppContext);
    const [targetUser, setTargetUser] = useState();
    useEffect(() => {
        const feachData = async () => {
            const url = `/Api/Posts/Users/${props.userId}`;
            const res = await axios.get(url)
            if (res.data != null) {
                setPosts(res.data);
            }
        }
        feachData();
    }, []);

    useEffect(() => {
        const feachData = async () => {
            const url = `/Api/Users/${props.userId}`;
            const res = await axios.get(url);
            setTargetUser(res.data);
        }
        feachData();
    }, []);

    return (
        <Grid className={classes.wrapper}>
            {targetUser &&
                <>
                    <Grid container direction="row" className={classes.item}>
                        <Grid className={classes.avatarWrapper}>
                            <Avatar alt={targetUser?.displayName} className={classes.avatar} src={`/${targetUser?.avatarFilePath}`}></Avatar>
                            <Typography variant='h4'>{targetUser?.displayName}</Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.item}>
                        <Typography className={classes.description} variant='body2'>自己紹介：{targetUser?.description}</Typography>
                    </Grid>
                    <Typography variant='h6'>投稿履歴</Typography>

                    <List>
                        <Divider />
                        {
                            posts?.map((t, i) => {
                                return (
                                    <Box className={classes.postItem} key={i}>
                                        <PostItem postData={t} elevation={0} nameIgnore />
                                        <Divider />
                                    </Box>
                                )
                            })
                        }
                    </List>
                </>
            }
        </Grid >
    )
}