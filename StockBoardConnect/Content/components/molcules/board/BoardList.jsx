import { List, ListItem, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import AppContext from '../../../contexts/AppContext.js';
import { BoardSearchBox } from './BoardSearchBox.jsx';

const useStyles = makeStyles(() => ({
    wrapper: {
        width: 'inherit',
        position: 'fixed'
    }
}))

const data = [{
    number: "ca51b49f-3201-4096-c3a8-08d91f43f349",
    type: '東証1部',
    name: 'スクロール'
},
{
    number: "4744ec04-ab2e-4751-c3d4-08d91f43f349",
    type: 'マザーズ',
    name: 'AI inside（株）'
},
{
    number: "d077c6bd-79c4-4dc0-c416-08d91f43f349",
    type: '東証2',
    name: '天昇電気工業（株）'
},
{
    number: "6d0bdf36-31ef-450c-c48b-08d91f43f349",
    type: 'マザーズ',
    name: 'NPC'
}];

export const BoardList = (props) => {
    const [company, setCompany] = useContext(AppContext);
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <List>
                {
                    data.map((t, i) => {
                        return (
                            <ListItem key={i} button onClick={() => setCompany(prev => ({ ...prev, id: t.number, name: t.name }))}>
                                <Typography variant="body2">{`${t.name}`}</Typography>
                            </ListItem>
                        )
                    })
                }
            </List>
            <BoardSearchBox />
        </Box>
    )
}