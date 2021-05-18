import React from 'react';

export const AntiForgeryToken = (props) => {
    return <input name="__RequestVerificationToken" type="hidden" value={props.token} />
}