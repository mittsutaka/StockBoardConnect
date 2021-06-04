import { Avatar, Divider, Grid, List, ListItem, Typography, Box, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../../contexts/AppContext.js';
import { ButtonWithIcon } from '../../atoms/ButtonWithIcon.jsx';
import axios from 'axios';
import { PostItem } from '../../molcules/board/PostItem.jsx';
import { UserEditModal } from '../../molcules/user/UserEditModal.jsx';

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
    }
}));

export const Profile = (props) => {
    const classes = useStyles();
    const [posts, setPosts] = useState();
    const [user, setUser] = useContext(AppContext);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        const feachData = async () => {
            if (user?.id) {
                const url = `/Api/Posts/Users/${user.id}`;
                const res = await axios.get(url)
                if (res.data != null) {
                    setPosts(res.data);
                }
            }
        }
        feachData();
    }, [user]);

    return (
        <Grid className={classes.wrapper}>
            {user &&
                <>
                    <Grid container direction="row" className={classes.item}>
                        <Grid className={classes.avatarWrapper}>
                            <Avatar alt={user?.displayName} className={classes.avatar} src={user?.avatarFilePath}></Avatar>
                            <Typography variant='h4'>{user?.displayName}</Typography>
                        </Grid>
                        <Grid className={classes.editWrapper}>
                            <ButtonWithIcon onClick={handleOpen} variant="outlined" color="primary" iconSize="small" icon="edit">プロフィール編集</ButtonWithIcon>
                        </Grid>
                    </Grid>
                    <Grid className={classes.item}>
                        <Typography variant='body1'>メールアドレス：{user?.email}</Typography>
                    </Grid>
                    <Grid className={classes.item}>
                        <Typography variant='body2'>自己紹介：{user?.description}</Typography>
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
                    <UserEditModal open={open} handleClose={handleClose} />
                </>
            }
        </Grid >
    )
}