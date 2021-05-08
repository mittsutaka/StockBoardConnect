import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    padding: 8px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 12px;
`

const HeaderLeft = styled.div`
    flex: 1;
`

const HeaderRight = styled.div`
    text-align: right;
    flex: 1;
    padding-right: 8px;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #e5e5e5;
    border-radius: 16px;
`

const Message = styled.span`
    padding: 8px;
    font-size: 14px;
`

const IconNumber = styled.div`
    padding-right: 16px
`

const Bottom = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direcrion: right;
    padding: 0 16px 8px 0;
    font-size: 14px;
`

export function PostItem(props) {
    return (
        <Wrapper>
            <Header>
                <HeaderLeft>{props.postData.name}</HeaderLeft>
                <HeaderRight>{props.postData.at}</HeaderRight>
            </Header>
            <Body>
                <Message>{props.postData.message}</Message>
                <Bottom>
                    <IconNumber>[good]{props.postData.good}</IconNumber>
                    <IconNumber>[bad]{props.postData.bad}</IconNumber>
                </Bottom>
            </Body>
        </Wrapper>
    )
}