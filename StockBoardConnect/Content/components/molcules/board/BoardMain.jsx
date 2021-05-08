import React from 'react';
import styled from 'styled-components';
import { PostItem } from './PostItem.jsx';

const Wrapper = styled.div`
    width: 75%;
    padding: 8px;
`;

const postsData = [{
    at: '2021/05/08 17:50',
    message: 'こんにちは、今日も頑張りましょう。',
    name: 'mittsutaka',
    good: 10,
    bad: 5
},
{
    at: '2021/05/08 17:57',
    message: 'こんにちは、そんなこといったってどうなるかわからないですよね。',
    name: 'suzuki keisuke',
    good: 100,
    bad: 2
},
{
    at: '2021/05/08 18:04',
    message: '今日はいい地合いで楽しみですね。',
    name: 'tensaiman',
    good: 13,
    bad: 2
},
{
    at: '2021/05/08 18:09',
    message: '明日からは土日なので今日は静かな気がします。だけども、どうなるかはまったくわかりませんね。皆さん今日も楽しく。人生楽しく生きていきましょう。',
    name: 'helloakachann',
    good: 18,
    bad: 20
}, {
    at: '2021/05/08 18:09',
    message: '明日からは土日なので今日は静かな気がします。だけども、どうなるかはまったくわかりませんね。皆さん今日も楽しく。人生楽しく生きていきましょう。',
    name: 'helloakachann',
    good: 18,
    bad: 20
}, {
    at: '2021/05/08 18:09',
    message: '明日からは土日なので今日は静かな気がします。だけども、どうなるかはまったくわかりませんね。皆さん今日も楽しく。人生楽しく生きていきましょう。',
    name: 'helloakachann',
    good: 18,
    bad: 20
}
];

export function BoardMain() {
    return (
        <Wrapper>
            {
                postsData.map(t => {
                    return (
                        <PostItem postData={t}></PostItem>
                    )
                })
            }
        </Wrapper>
    )
}