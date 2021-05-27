import React, { useState, useContext } from 'react';
import { PostItem } from './PostItem.jsx';
import { Box, Button, TextField, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useEffect } from 'react';
import AppContext from '../../../contexts/AppContext.js';


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
        height: '100%'
    },
    postTextField: {
        backgroundColor: 'white',
    },
    postAction: {
        textAlign: 'right',
        padding: theme.spacing(1),
        fontSize: '12px'
    }
}));


const iniPosts = [{
    at: '2021/05/08 17:50:05',
    text: 'こんにちは、今日も頑張りましょう。',
    userName: 'mittsutaka',
    good: 10,
    bad: 5
},
{
    at: '2021/05/08 17:57:29',
    text: 'こんにちは、そんなこといったってどうなるかわからないですよね。',
    userName: 'suzuki keisuke',
    good: 100,
    bad: 2
},
{
    at: '2021/05/08 18:04:39',
    text: '今日はいい地合いで楽しみですね。',
    userName: 'tensaiman',
    good: 13,
    bad: 2
},
{
    at: '2021/05/08 18:09:35',
    text: '明日からは土日なので今日は静かな気がします。だけども、どうなるかはまったくわかりませんね。皆さん今日も楽しく。人生楽しく生きていきましょう。',
    userName: 'helloakachann',
    good: 18,
    bad: 20000
}, {
    at: '2021/05/08 18:09:59',
    text: '明日からは土日なので今日は静かな気がします。だけども、どうなるかはまったくわかりませんね。皆さん今日も楽しく。人生楽しく生きていきましょう。',
    userName: '村尾光崇',
    good: 18,
    bad: 20
}, {
    at: '2021/05/08 18:09:59',
    text: '明日からは土日なので今日は静かな気がします。だけども、どうなるかはまったくわかりませんね。皆さん今日も楽しく。人生楽しく生きていきましょう。',
    userName: '村尾光崇',
    good: 18,
    bad: 20
}, {
    at: '2021/05/08 18:09:59',
    text: '明日からは土日なので今日は静かな気がします。だけども、どうなるかはまったくわかりませんね。皆さん今日も楽しく。人生楽しく生きていきましょう。',
    userName: '村尾光崇',
    good: 18,
    bad: 20
}, {
    at: '2021/05/08 18:09:59',
    text: '明日からは土日なので今日は静かな気がします。だけども、どうなるかはまったくわかりませんね。皆さん今日も楽しく。人生楽しく生きていきましょう。',
    userName: '村尾光崇',
    good: 18,
    bad: 20
}];

export const BoardMain = (props) => {
    const classes = useStyles();
    const [posts, setPosts] = useState(iniPosts);
    const [text, setText] = useState();
    const [companyId, setCompanyId] = useContext(AppContext);
    const handlePostAsync = async () => {
        const url = '/Api/Posts';
        const data = { companyId: companyId, text: text };
        const res = await axios.post(url, data);
        setText("");
    }

    useEffect(() => {
        const feachData = async () => {
            const url = `/Api/Posts?companyId=${companyId}`;
            const res = await axios.get(url)
            if (res.data != null) {
                setPosts(res.data);
            }
        }
        feachData();
    }, [companyId])

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.header}>
                <Typography variant='subtitle1'>スクロール</Typography>
            </Box>
            {
                posts.map((t, i) => {
                    return (
                        <Box className={classes.postItem} key={i}><PostItem postData={t}></PostItem></Box>
                    )
                })
            }
            <Box className={classes.postBox}>
                <Grid container direction='column'>
                    <Grid item sm={12}>
                        <TextField variant='outlined' className={classes.postTextField} fullWidth multiline rows='3' onChange={(e) => setText(e.target.value)} value={text}></TextField>
                    </Grid>
                    <Grid item sm={12} className={classes.postAction}>
                        <Button variant='contained' color='primary' onClick={handlePostAsync} >投稿</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}