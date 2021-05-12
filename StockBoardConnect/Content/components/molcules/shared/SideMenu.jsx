import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import Icon from '@material-ui/core/Icon';

export function SideMenu() {
    return (
        <List>
            <ListItem>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="ボード" />
            </ListItem>
            <ListItem>
                <ListItemIcon><Icon>star</Icon></ListItemIcon>
                <ListItemText primary="ボード" />
            </ListItem>
        </List>
    )
}