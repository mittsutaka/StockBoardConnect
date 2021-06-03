import React, { useState, useEffect } from 'react';
import { BoardList } from '../../molcules/board/BoardList.jsx';
import { BoardMain } from '../../molcules/board/BoardMain.jsx';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BoardContext from '../../../contexts/BoardContext.js';
import { HubConnectionBuilder } from "@microsoft/signalr";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
}));

export const Profile = (props) => {
    const classes = useStyles();
    return (
        <div>
        </div>
    )
}