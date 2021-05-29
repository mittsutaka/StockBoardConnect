import { TextField, Box, Paper, List, ListItem } from '@material-ui/core';
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import AppContext from '../../../contexts/AppContext.js';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: theme.spacing(2),
    },
    paper: {
        position: 'absolute',
        width: '100%',
        fontSize: '14px',
        maxHeight: '480px',
        overflow: 'auto',
        zIndex:'1'
    },
    search: {
        fontSize: '12px',
        padding: theme.spacing(2)
    },
    textFieldRoot: {
        width:'100%'
    }
}))

export const BoardSearchBox = (props) => {
    const classes = useStyles();
    const [searchText, setSearchText] = useState("");
    const [companies, setCompanies] = useState();
    const [company, setCompany] = useContext(AppContext);
    useEffect(() => {
        if (searchText) {
            const searchCompanies = async () => {
                const url = `/api/Companies?keyword=${searchText}&take=20`;
                const res = await axios.get(url);
                setCompanies(res.data);
            }
            searchCompanies();
        }
    }, [searchText]);

    const handleClick = (e) => {
        setSearchText('');
        setCompany(prev => ({ ...prev, id: e.currentTarget.dataset.id, name: e.currentTarget.dataset.name, at: new Date() }));
    }

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    return (
        <Box className={classes.wrapper}>
            <TextField className={classes.textFieldRoot} inputProps={{ className: classes.search }} variant="outlined" onChange={handleChange} value={searchText} placeholder='銘柄名又はコードで検索'></TextField>
            {
                searchText &&
                Boolean(companies?.length) &&
                <Paper id='search' className={classes.paper}>
                    <List>
                        {
                            companies?.map((t, i) => {
                                return (
                                    <ListItem onClick={handleClick} button key={i} data-id={t.id} data-name={t.name}>{`${t.code} ${t.name}`}</ListItem>
                                )
                            })
                        }
                    </List>
                </Paper>
            }
        </Box >
    )
}