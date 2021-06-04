import { Avatar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import AppContext from '../../../contexts/AppContext.js';

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
    }
}));

const data = {
    id: 'd4e43a39-aae6-42aa-bbd4-8dc562ca345f',
    email: 'mitsutaka.murao@tryeting.jp',
    displayName: 'mittsutaka',
    description: '',
    avatar: 'test'
}

export const Profile = (props) => {
    const classes = useStyles();
    const [user, setUser] = useContext(AppContext);
    return (
        <Grid className={classes.wrapper}>
            {user &&
                <>
                    <Grid className={classes.item}>
                        <Avatar alt={user?.displayName} className={classes.avatar} src={user?.avatarFilePath}></Avatar>
                        <Typography variant='h4'>{user?.displayName}</Typography>
                    </Grid>
                    <Grid className={classes.item}>
                        <Typography variant='body1'>メールアドレス：{user?.email}</Typography>
                    </Grid>
                    <Grid className={classes.item}>
                        <Typography variant='body1'>自己紹介：{user?.description}</Typography>
                    </Grid>
                </>
            }
        </Grid>
    )
}