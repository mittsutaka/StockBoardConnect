import React, { useContext, useState } from 'react';
import { Grid, Typography, Box, Modal, Paper, Button, TextField, Dialog, DialogActions, FilledInput, DialogContent, DialogTitle, InputLabel, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonWithIcon } from '../../atoms/ButtonWithIcon.jsx';
import AppContext from '../../../contexts/AppContext.js';
import axios from 'axios';
import { InputFile } from '../../atoms/InputFile.jsx';
import { ErrorMessage } from '../../atoms/ErrorMessage.jsx';

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
    },
    avatarBox: {
        marginBottom: theme.spacing(3)
    }
}));

export const UserEditModal = (props) => {
    const classes = useStyles();
    const [user, setUser] = useContext(AppContext);
    const [editUserData, setEditUserData] = useState(user);
    const [tmpImageUrl, setTempImagaUrl] = useState(user?.avatarFilePath);
    const [errorMessage, setErrorMessage] = useState();

    const handleClickCancel = () => {
        props.handleClose();
        setEditUserData(user);
    }

    const handleClickSubmit = async () => {
        try {
            const url = `Api/Users/${user.id}`;
            const res = await axios.patch(url, editUserData);
            props.handleClose();
            setUser(res.data);
        }
        catch (error) {
            setErrorMessage(error.data);
        }
    }

    const handleFileChange = async (e) => {
        try {
            if (!e.target.files[0]) return;
            const url = `/Api/Users/${user.id}/Files/Avatar`;
            const data = new FormData();
            const headers = { "content-type": "multipart/form-data" };
            data.append('file', e.target.files[0]);

            const res = await axios.post(url, data, { headers });
            setTempImagaUrl(res.data);
            setEditUserData({
                ...editUserData, avatarFileTempPath: res.data
            })
        } catch (error) {
            setErrorMessage(error.response.data);
        }
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle >プロフィール編集</DialogTitle>
            <Box className={classes.body}>
                <Box className={classes.avatarBox}>
                    <InputLabel className={classes.label}>アバター画像(3MB以下)</InputLabel>
                    <InputFile imgSrc={tmpImageUrl} onChange={handleFileChange}></InputFile>
                    {
                        errorMessage && <ErrorMessage text={errorMessage} />
                    }
                </Box>
                <TextField className={classes.textField} fullWidth variant='outlined' label='表示名' size='small' value={editUserData.displayName} onChange={(e) => setEditUserData({ ...editUserData, displayName: e.target.value })}></TextField>
                <TextField className={classes.textField} fullWidth variant='outlined' label='メールアドレス' type='email' size='small' value={editUserData.email} onChange={(e) => setEditUserData({ ...editUserData, email: e.target.value })}></TextField>
                <TextField className={classes.textField} fullWidth variant='outlined' label='自己紹介' multiline rows={5} size='small' value={editUserData.description ?? ""} onChange={(e) => setEditUserData({ ...editUserData, description: e.target.value })}></TextField>
            </Box>
            <DialogActions>
                <ButtonWithIcon onClick={handleClickCancel} iconSize='small' color='primary' icon='close'>キャンセル</ButtonWithIcon>
                <ButtonWithIcon onClick={handleClickSubmit} iconSize='small' color='primary' variant='contained' icon='send'>保存</ButtonWithIcon>
            </DialogActions>
        </Dialog>
    )
}