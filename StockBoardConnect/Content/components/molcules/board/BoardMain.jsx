import React, { useState, useContext } from 'react';
import { PostItem } from './PostItem.jsx';
import { Box, Button, TextField, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useEffect } from 'react';
import AppContext from '../../../contexts/AppContext.js';
import { BoardSearchBox } from './BoardSearchBox.jsx';

const useStyles = makeStyles((theme) => ({
    postItem: {
        padding: theme.spacing(1),
    },
    header: {
        padding: theme.spacing(1)
    },
    postBox: {
        position: 'sticky',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        paddingBottom: theme.spacing(1)
    },
    wrapper: {
        position: 'relative',
        height: '100%',
        overflow: 'auto'
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

    }
}));

export const BoardMain = (props) => {
    const classes = useStyles();
    const [posts, setPosts] = useState();
    const [text, setText] = useState();
    const [company, setCompany] = useContext(AppContext);
    const handlePostAsync = async () => {
        if (text) {
            const url = '/Api/Posts';
            const data = { companyId: company.id, text: text };
            const res = await axios.post(url, data);
            setText("");
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
                    <Box className={classes.header}>
                        <Typography variant='subtitle1'>{company.name}</Typography>
                    </Box>
                    <Box className={classes.body}>
                        {
                            posts?.map((t, i) => {
                                return (
                                    <Box className={classes.postItem} key={i}><PostItem postData={t}></PostItem></Box>
                                )
                            })
                        }
                        <Box className={classes.postBox}>
                            <Grid container direction='column'>
                                <Grid item sm={12}>
                                    <TextField inputProps={{ className: classes.postInput }} variant='outlined' className={classes.postTextField} fullWidth multiline rows='3' onChange={(e) => setText(e.target.value)} value={text}></TextField>
                                </Grid>
                                <Grid item sm={12} className={classes.postAction}>
                                    <Button variant='contained' color='primary' onClick={handlePostAsync} >投稿</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </>
            }

        </Box>
    )
}