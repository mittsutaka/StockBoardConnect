import React from 'react';

export function AntiForgeryToken(props) {
    return <input name="__RequestVerificationToken" type="hidden" value={props.token} />
}