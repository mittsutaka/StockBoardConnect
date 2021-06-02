import React, { useState, useEffect } from 'react';
import { BoardList } from '../../molcules/board/BoardList.jsx';
import { BoardMain } from '../../molcules/board/BoardMain.jsx';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BoardContext from '../../../contexts/BoardContext.js';
import { HubConnectionBuilder } from "@microsoft/signalr";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    list: {
        width: '240px'
    },
    main: {
        flex: 1
    },
    wrapper: {
        height: '100%',
    }
}));

export const Board = (props) => {
    const classes = useStyles();
    const [company, setCompany] = useState({
        id: '',
        name: '',
        at: '',
        code: '',
    });
    const [favoriteCompanies, setFavoriteCompanies] = useState([]);
    const [connection, setConnection] = useState(null);

    useEffect(() => {
        const connect = new HubConnectionBuilder()
            .withUrl("/BoardHub")
            .withAutomaticReconnect()
            .build();

        setConnection(connect);
    }, []);

    useEffect(() => {
        if (connection) {
            (async () => {
                await connection.start();
            })();

            connection.on("ReceiveMessage", () => {
                setCompany(prev => ({ ...prev, at: new Date() }));
            })
        }
    }, [connection]);

    useEffect(() => {
        const fecthCompany = async () => {
            const url = `/Api/Companies/${props.companyId}`;
            const res = await axios.get(url);
            setCompany(prev => ({ ...prev, ...res.data }));
        }

        if (props.companyId) {
            fecthCompany();
        }
    }, [])

    return (
        <BoardContext.Provider value={[company, setCompany, favoriteCompanies, setFavoriteCompanies]}>
            <Grid container wrap='nowrap' className={classes.wrapper}>
                <Grid item className={classes.list}>
                    <BoardList />
                </Grid>
                <Grid item className={classes.main}>
                    <BoardMain />
                </Grid>
            </Grid>
        </BoardContext.Provider>
    )
}