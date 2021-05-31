import { List, ListItem, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../../contexts/AppContext.js';
import axios from 'axios';

const useStyles = makeStyles(() => ({
    wrapper: {
    }
}))

export const BoardList = (props) => {
    const [company, setCompany, favoriteCompanies, setFavoriteCompanies] = useContext(AppContext);
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
            <List>
                {
                    favoriteCompanies?.map((t, i) => {
                        return (
                            <ListItem key={i} button onClick={() => setCompany(prev => ({ ...prev, id: t.company.id, name: t.company.name }))}>
                                <Typography variant="body2">{`${t.company.name}`}</Typography>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Box>
    )
}