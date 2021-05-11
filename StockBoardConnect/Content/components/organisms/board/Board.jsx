import React from 'react';
import styled from 'styled-components';
import { List } from '../../molcules/board/List.jsx';
import { BoardMain } from '../../molcules/board/BoardMain.jsx';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 640px;
`

export function Board() {
    return (
        <Wrapper>
            <List width="25%" />
            <BoardMain width="75%" />
        </Wrapper>
    )
}