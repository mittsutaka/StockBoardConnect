import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-right: 1px solid #e5e5e5;
    padding: 8px
`;

const Item = styled.div`
    color: #222;
    font-size: 14px;
    border-bottom: 1px solid #e5e5e5;
    padding: 1rem;
    cursor: pointer;
`;

const BoardNumber = styled.span`
    color: red;
    font-size: 12px;
    margin-right: 8px;
`;

const data = [{
    number: 8005,
    type: '東証1部',
    name: 'スクロール'
},
{
    number: 4488,
    type: 'マザーズ',
    name: 'AI inside（株）'
},
{
    number: 6776,
    type: '東証2',
    name: '天昇電気工業（株）'
},
{
    number: 6255,
    type: 'マザーズ',
    name: 'NPC'
}];

export function List(props) {
    return (
        <Wrapper>
            {
                data.map((t, i) => {
                    return (
                        <Item key={i}>
                            <BoardNumber>{t.number}</BoardNumber>
                            {t.name}
                        </Item>
                    )
                })
            }
        </Wrapper>
    )
}