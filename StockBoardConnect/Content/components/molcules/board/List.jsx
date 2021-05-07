import React from 'react';
import styled from 'styled-components';

const Label = styled.h3`
    color: #222;
    font-size: 14px;
`;

const BoardNumber = styled.span`
    color: red;
    font-size: 11px;
`;


const data = [{
    number: 8005,
    name: 'スクロール'
},
{
    number: 4488,
    name: 'AI inside（株）'
}];

export function List() {
    return (
        <div>
            {
                data.map((t) => {
                    return (
                        <Label>
                            <BoardNumber>{t.number}</BoardNumber>
                            {t.name}
                        </Label>
                    )
                })
            }
        </div>
    )
}