import React, { useState, useContext, useEffect } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import AppContext from '../../../contexts/AppContext.js';

const data = [{
    number: "ca51b49f-3201-4096-c3a8-08d91f43f349",
    type: '東証1部',
    name: 'スクロール'
},
{
    number: "ca51b49f-3201-4096-c3a8-08d91f43f349",
    type: 'マザーズ',
    name: 'AI inside（株）'
},
{
    number: "ca51b49f-3201-4096-c3a8-08d91f43f349",
    type: '東証2',
    name: '天昇電気工業（株）'
},
{
    number: "ca51b49f-3201-4096-c3a8-08d91f43f349",
    type: 'マザーズ',
    name: 'NPC'
}];

export const BoardList = (props) => {
    const [companyId, setCompanyId] = useContext(AppContext);

    return (
        <List className={props.className}>
            {
                data.map((t, i) => {
                    return (
                        <ListItem key={i} button onClick={() => setCompanyId(t.number)}>
                            <Typography variant="body2">{`${t.name}`}</Typography>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}