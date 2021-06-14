import { Box, Button, Grid, Icon, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useContext, useEffect, useState, useRef } from 'react';
import AppContext from '../../../contexts/AppContext.js';
import BoardContext from '../../../contexts/BoardContext.js';
import { ButtonWithIcon } from '../../atoms/ButtonWithIcon.jsx';
import { BoardSearchBox } from './BoardSearchBox.jsx';
import { PostItem } from './PostItem.jsx';

const useStyles = makeStyles((theme) => ({
    postItem: {
        padding: theme.spacing(1),
    },
    header: {
        padding: theme.spacing(1)
    },
    postBox: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        paddingBottom: theme.spacing(1)
    },
    wrapper: {
        position: 'relative',
        height: '100%',
    },
    postTextField: {
        backgroundColor: 'white',
    },
    postAction: {
        textAlign: 'right',
        padding: theme.spacing(1),
        fontSize: '12px'
    },
    postInput: {
        fontSize: '14px'
    },
    body: {
        overflow: 'auto',
        height: '100%'
    },
    name: {
        marginRight: theme.spacing(3)
    },
    favoriteBtnWrapper: {
        paddingRight: theme.spacing(2)
    },
    emptyBox: {
        height: '280px',
        width: '100%',
    },
    headerLeft: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
}));

export const BoardMain = (props) => {
    const classes = useStyles();
    const [posts, setPosts] = useState();
    const testEl = useRef();
    const [company, setCompany, favoriteCompanies, setFavoriteCompanies] = useContext(BoardContext);
    const [user, setUser] = useContext(AppContext);
    const handlePostAsync = async () => {
        if (testEl.current.value) {
            const url = '/Api/Posts';
            const data = { companyId: company.id, text: testEl.current.value };
            const res = await axios.post(url, data);
            testEl.current.value = '';
        }
    }

    const handleAddFavoriteCompany = async () => {
        if (company.id) {
            const url = '/Api/FavoriteCompanies';
            const data = { companyId: company.id }
            const res = await axios.post(url, data);
            if (res.data) {
                setFavoriteCompanies(prev => [...prev, res.data]);
            }
        }
    }

    const handleRemoveFavoriteCompany = async () => {
        if (company.id) {
            const url = `/Api/FavoriteCompanies?companyId=${company.id}`;
            const res = await axios.delete(url);
            if (res.code = '204') {
                const url = "/Api/FavoriteCompanies";
                const res = await axios.get(url);
                setFavoriteCompanies([...res.data]);
            }
        }
    }

    useEffect(() => {
        const feachData = async () => {
            if (company.id) {
                const url = `/Api/Posts?companyId=${company.id}`;
                const res = await axios.get(url)
                if (res.data != null) {
                    setPosts(res.data);
                }
            }
        }
        feachData();
    }, [company]);

    return (
        <Box className={classes.wrapper}>
            <BoardSearchBox />
            {company.id &&
                <>
                    <Grid container className={classes.header} direction='row'>
                        <Grid className={classes.headerLeft}>
                            <Typography variant='subtitle1' className={classes.name}>{`${company.code} ${company.name}`}</Typography>
                            <Typography variant='h6' color='primary'>{`${company.currentPrice}`}</Typography>
                        </Grid>
                        <Grid item className={classes.favoriteBtnWrapper}>
                            {
                                !favoriteCompanies.some(t => { return t?.companyId == company?.id }) ?
                                    <ButtonWithIcon icon='add' iconSize='small' variant='outlined' size='small' color='primary' className={classes.favoriteBtn} onClick={handleAddFavoriteCompany}>お気に入りに追加</ButtonWithIcon>
                                    : <ButtonWithIcon icon='remove_circle_outline' iconSize='small' variant='outlined' size='small' color='secondary' className={classes.favoriteBtn} onClick={handleRemoveFavoriteCompany}>お気に入りから削除</ButtonWithIcon>
                            }
                        </Grid>
                    </Grid>
                    <Box className={classes.body}>
                        {
                            posts?.map((t, i) => {
                                return (
                                    <Box className={classes.postItem} key={i}><PostItem postData={t}></PostItem></Box>
                                )
                            })
                        }
                        <Box className={classes.emptyBox}></Box>
                    </Box>
                    <Box className={classes.postBox}>
                        <Grid container direction='column'>
                            <Grid item sm={12}>
                                <TextField placeholder='(マナーを守って投資仲間と楽しく会話しましょう)' inputProps={{ className: classes.postInput, ref: testEl }} variant='outlined' className={classes.postTextField} fullWidth multiline rows='3'></TextField>
                            </Grid>
                            <Grid item sm={12} className={classes.postAction}>
                                <ButtonWithIcon variant='contained' color='primary' onClick={handlePostAsync} icon='send' iconSize='small'>投稿</ButtonWithIcon>
                            </Grid>
                        </Grid>
                    </Box>
                </>
            }

        </Box>
    )
}