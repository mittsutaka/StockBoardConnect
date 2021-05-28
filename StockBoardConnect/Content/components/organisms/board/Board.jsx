import React, { useState, useEffect } from 'react';
import { BoardList } from '../../molcules/board/BoardList.jsx';
import { BoardMain } from '../../molcules/board/BoardMain.jsx';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppContext from '../../../contexts/AppContext.js';
import { HubConnectionBuilder } from "@microsoft/signalr";

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

export const Board = () => {
    const classes = useStyles();
    const [company, setCompany] = useState({
        id: "",
        name: "",
        at: ""
    });
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

    const sendMessage = async () => {
        if (connection) await connection.send("SendMessage", inputText);
        setInputText("");
    };

    return (
        <AppContext.Provider value={[company, setCompany]}>
            <Grid container wrap='nowrap' className={classes.wrapper}>
                <Grid item className={classes.list}>
                    <BoardList />
                </Grid>
                <Grid item className={classes.main}>
                    {
                        company.id &&
                        <BoardMain />
                    }
                </Grid>
            </Grid>
        </AppContext.Provider>
    )
}