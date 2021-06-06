import React, { useContext, useState } from 'react';
import { Grid, Typography, Box, Modal, Paper, Button, TextField, Dialog, DialogActions, FilledInput, DialogContent, DialogTitle, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonWithIcon } from '../../atoms/ButtonWithIcon.jsx';
import AppContext from '../../../contexts/AppContext.js';
import axios from 'axios';
import { InputFile } from '../../atoms/InputFile.jsx';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginBottom: theme.spacing(3)
    },
    body: {
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingTop: theme.spacing(2)
    },
    label: {
        fontSize: '12px',
        paddingLeft: theme.spacing(1.5),
        marginBottom: theme.spacing(0.5)
    }

}));

export const UserEditModal = (props) => {
    const classes = useStyles();
    const [user, setUser] = useContext(AppContext);
    const [editUserData, setEditUserData] = useState(user);

    const handleClickCancel = () => {
        props.handleClose();
        setEditUserData(user);
    }

    const handleClickSubmit = async () => {
        try {
            const url = `Api/Users/${user.id}`;
            const res = await axios.patch(url, editUserData);
            props.handleClose();
            setUser(editUserData);
        }
        catch (error) {
        }
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle >プロフィール編集</DialogTitle>
            <Box className={classes.body}>
                <TextField className={classes.textField} fullWidth variant='outlined' label='表示名' size='small' value={editUserData.displayName} onChange={(e) => setEditUserData({ ...editUserData, displayName: e.target.value })}></TextField>
                <TextField className={classes.textField} fullWidth variant='outlined' label='メールアドレス' type='email' size='small' value={editUserData.email} onChange={(e) => setEditUserData({ ...editUserData, email: e.target.value })}></TextField>
                <TextField className={classes.textField} fullWidth variant='outlined' label='自己紹介' multiline rows={5} size='small' value={editUserData.description} onChange={(e) => setEditUserData({ ...editUserData, description: e.target.value })}></TextField>
                <Box>
                    <InputLabel className={classes.label}>アバター画像</InputLabel>
                    <InputFile></InputFile>
                </Box>
            </Box>
            <DialogActions>
                <ButtonWithIcon onClick={handleClickCancel} iconSize='small' color='primary' icon='close'>キャンセル</ButtonWithIcon>
                <ButtonWithIcon onClick={handleClickSubmit} iconSize='small' color='primary' variant='contained' icon='send'>保存</ButtonWithIcon>
            </DialogActions>
        </Dialog>
    )
}