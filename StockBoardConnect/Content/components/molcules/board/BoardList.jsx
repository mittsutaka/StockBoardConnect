import { List, ListItem, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext, useEffect, useState } from 'react';
import BoardContext from '../../../contexts/BoardContext.js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Color from '../../../consts/Color.js';

const useStyles = makeStyles((theme) => ({
    wrapper: {
    },
    list: {
        paddingTop: theme.spacing(2)
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    selected: {
        backgroundColor: '#5f6c7b',
        color: Color.WHITE,
        '&:hover': {
            backgroundColor: '#5f6c7b'
        }
    }
}))

export const BoardList = (props) => {
    const [company, setCompany, favoriteCompanies, setFavoriteCompanies] = useContext(BoardContext);
    const classes = useStyles();

    const fetchFavoriteCompanies = async () => {
        const url = "/Api/FavoriteCompanies";
        const res = await axios.get(url);
        setFavoriteCompanies([...res.data]);
    }

    useEffect(() => {
        fetchFavoriteCompanies();
    }, []);

    return (
        <Box className={classes.wrapper}>
            <List className={classes.list}>
                {
                    favoriteCompanies?.map((t, i) => {
                        const isSelected = company?.id == t.company.id;
                        return (
                            <Link to={`/Board/Index/${t.company.id}`} key={i} className={classes.link} >
                                <ListItem className={`${isSelected && classes.selected}`} button onClick={() => setCompany(prev => ({ ...prev, id: t.company.id, name: t.company.name, code: t.company.code }))}>
                                    <Typography variant="body2" noWrap>{`${t.company.name}`}</Typography>
                                </ListItem>
                            </Link>
                        )
                    })
                }
            </List>
        </Box >
    )
}