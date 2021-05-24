import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';

const data = [{
    number: 8005,
    type: '東証1部',
    name: 'スクロール'
},
{
    number: 4488,
    type: 'マザーズ',
    name: 'AI inside（株）'
},
{
    number: 6776,
    type: '東証2',
    name: '天昇電気工業（株）'
},
{
    number: 6255,
    type: 'マザーズ',
    name: 'NPC'
}];

export const BoardList = (props) => {
    return (
        <List>
            {
                data.map((t, i) => {
                    return (
                        <ListItem key={i} button>
                            <Typography variant="body2">{`${t.number} - ${t.name} `}</Typography>
                            {/*<ListItemText secondary= />*/}
                        </ListItem>
                    )
                })
            }
        </List>
    )
}