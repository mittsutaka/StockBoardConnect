﻿import React from 'react';
import { List } from '../../molcules/board/List.jsx';
import { BoardMain } from '../../molcules/board/BoardMain.jsx';
import { Container,Grid } from '@material-ui/core';

export function Board() {
    return (
        <Container>
            <Grid container>
                <Grid item xs={3}>
                    <List/>
                </Grid>
                <Grid item xs={9}>
                    <BoardMain/>
                </Grid>
            </Grid>
        </Container>
    )
}