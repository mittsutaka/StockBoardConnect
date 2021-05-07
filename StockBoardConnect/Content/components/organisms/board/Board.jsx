import React from 'react';
import styled from 'styled-components';
import { List } from '../../molcules/board/List.jsx';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;

`

const Temp = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
`

export function Board() {
    return (
        <Wrapper>
            <List />
            <Temp></Temp>
        </Wrapper>
    )
}