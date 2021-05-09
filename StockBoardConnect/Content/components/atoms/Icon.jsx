import React from 'react';
import styled from 'styled-components';

const Span = styled.span.attrs({
    className: "material-icons"
})`
    color : ${props => props.c};
    margin: ${props => props.m};
    font-size: ${ props => props.s};
    padding: ${props => props.p };
`

export function Icon(props) {
    return <Span c={props.color} s={props.size} m={props.margin} p={props.padding} >{props.value}</Span>
} 