import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    icon: {
        minWidth: 'auto',
    },
    text: {
        paddingLeft: theme.spacing(2),
    },
    item: {
        minHeight: theme.spacing(6)
    },
    selected: {
        color: '#3da9fc',
        fontWeight: 'bold'
    }
}));

const datas = [{
    icon: 'home',
    text: 'ホーム'
},
{
    icon: 'collections_bookmark',
    text: 'ボード'
},
{
    icon: 'email',
    text: 'メッセージ'
},
{
    icon: 'group',
    text: 'フレンド'
},
{
    icon: 'face',
    text: 'プロフィール'
},
{
    icon: 'notifications',
    text: '通知'
},
];

export const SideMenu = (props) => {
    const classes = useStyles();
    return (
        <List className={props.className} component='nav'>
            {
                datas.map((t, i) => {
                    const isSelected = t.text == 'ボード';
                    return (
                        <ListItem className={`${classes.item}`} button key={i}>
                            <ListItemIcon className={`${classes.icon} ${isSelected && classes.selected}`}><Icon>{t.icon}</Icon></ListItemIcon>
                            <Hidden smDown>
                                <ListItemText primaryTypographyProps={{ className: isSelected && classes.selected }} className={classes.text} primary={t.text} />
                            </Hidden>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}