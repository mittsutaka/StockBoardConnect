import React from 'react';
import styled from 'styled-components';
import { Part } from './Part.jsx';

const BlueTitle = styled.h1`
    color: #222;
    font-family: Helvetica, 'sans-serif';
    text-shadow: 0 0 5px lightgray;
    line-height: 2;

    a {
        transition: color 0.2s ease;
        color: palevioletred;
        text-decoration: none;

        &:hover {
            color: #888;
        }
    }
`;

export function Tutorial() {
    return (
        <div>
            <Part />
            <BlueTitle>
                Hello from{' '}
                <a href="https://github.com/styled-components/styled-components">
                    styled-components
                </a>
                !
            </BlueTitle>
        </div>
    )
}