import { List, ListItem, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext, useEffect, useState } from 'react';
import BoardContext from '../../../contexts/BoardContext.js';
import axios from 'axios';

const useStyles = makeStyles(() => ({
    wrapper: {
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
            <List>
                {
                    favoriteCompanies?.map((t, i) => {
                        return (
                            <ListItem key={i} button onClick={() => setCompany(prev => ({ ...prev, id: t.company.id, name: t.company.name, code: t.company.code }))}>
                                <Typography variant="body2" noWrap>{`${t.company.name}`}</Typography>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Box>
    )
}