import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../atoms/Icon.jsx';

const Wrapper = styled.div`
    width: 100%;
    padding: ${props => props.p};
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
    flex-direction: row;
    border: 1px solid #e5e5e5;
    border-radius: 16px;
`

const Message = styled.span`
    font-size: 14px;
    width:100%;
    padding: 8px;
`

const Reply = styled.div`
    display: flex;
    padding: 8px 16px;
    align-items: center;
    border-left: 1px solid #e5e5e5;
    font-size: 11px;
`

const Actions = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    width: 80px;
`

const IconNumber = styled.div`
    font-size: 12px;
    display:flex;
    flex-direction: row;
    align-items: center;
    margin: ${props => props.margin};
    padding: ${props => props.padding};
`

const Commands = styled.div`
    display: flex;
    flex-direcrion: row;
    font-size: 14px;
    width:180px;
`

export function PostItem(props) {
    return (
        <Wrapper p={props.padding}>
            <Header className="tg">
                <HeaderLeft>{props.postData.name}</HeaderLeft>
                <HeaderRight>{props.postData.at}</HeaderRight>
            </Header>
            <Body>
                <Message>{props.postData.message}</Message>
                <Commands>
                    <Reply>返信</Reply>
                    <Actions>
                        <IconNumber margin="0 0 4px 0" padding="0 8px 0 0"><Icon size="20px" margin="0 4px 0 0" color="blue" value="thumb_up" />{props.postData.good}</IconNumber>
                        <IconNumber padding="0 8px 0 0"><Icon size="20px" margin="0 4px 0 0" color="red" value="thumb_down" />{props.postData.bad}</IconNumber>
                    </Actions>
                </Commands>
            </Body>
        </Wrapper>
    )
}