import { TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

export const BoardSearchBox = (props) => {
    const [searchText, setSearchText] = useState("");

    const handleGetBoardList = async (e) => {

    }

    return (
        <>
            <TextField variant='standard' onChange={(e) => setSearchText(e.target.value)} value={searchText}></TextField>
        </>
    )
}