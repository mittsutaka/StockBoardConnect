import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

export function SideMenu(props) {
    return (
        <List className={props.className}>
            <ListItem button>
                <ListItemIcon><Icon>home</Icon></ListItemIcon>
                <ListItemText primary="ホーム" />
            </ListItem>
            <ListItem button>
                <ListItemIcon><Icon>collections_bookmark</Icon></ListItemIcon>
                <ListItemText primary="ボード" />
            </ListItem>
            <ListItem button>
                <ListItemIcon><Icon>email</Icon></ListItemIcon>
                <ListItemText primary="メッセージ" />
            </ListItem>
            <ListItem button>
                <ListItemIcon><Icon>group</Icon></ListItemIcon>
                <ListItemText primary="フレンド" />
            </ListItem>
            <ListItem button>
                <ListItemIcon><Icon>notifications</Icon></ListItemIcon>
                <ListItemText primary="通知" />
            </ListItem>
            <ListItem button>
                <ListItemIcon><Icon>face</Icon></ListItemIcon>
                <ListItemText primary="プロフィール" />
            </ListItem>
        </List>
    )
}