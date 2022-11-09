import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Hidden, Link } from '@material-ui/core';
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
    },
    link: {
        color: 'inherit',
        '&:hover': {
            textDecoration: 'none',
        }
    }
}));

const datas = [{
    icon: 'home',
    text: 'ホーム',
    link: '/home'
},
{
    icon: 'collections_bookmark',
    text: 'ボード',
    link: '/board'
},
{
    icon: 'email',
    text: 'メッセージ',
    link: '/message'
},
{
    icon: 'group',
    text: 'フレンド',
    link: 'friend'
},
{
    icon: 'face',
    text: 'プロフィール',
    link: '/user'
},
{
    icon: 'notifications',
    text: '通知',
    link: '/notification'
},
];

export const SideMenu = (props) => {
    const classes = useStyles();
    return (
        <List className={props.className} component='nav'>
            {
                datas.map((t, i) => {
                    const isSelected = t.text == props.sideSelected;
                    return (
                        <Link key={i} href={t.link} className={classes.link}>
                            <ListItem className={`${classes.item}`} button>
                                <ListItemIcon className={`${classes.icon} ${isSelected && classes.selected}`}><Icon>{t.icon}</Icon></ListItemIcon>
                                <Hidden smDown>
                                    <ListItemText primaryTypographyProps={{ className: `${isSelected && classes.selected}` }} className={classes.text} primary={t.text} />
                                </Hidden>
                            </ListItem>
                        </Link>
                    )
                })
            }
        </List>
    )
}