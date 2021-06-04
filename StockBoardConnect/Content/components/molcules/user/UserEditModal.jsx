import React from 'react';
import { Grid, Typography, Box, Modal, Paper, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonWithIcon } from '../../atoms/ButtonWithIcon.jsx';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginBottom: theme.spacing(3)
    },
    body: {
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingTop: theme.spacing(2)
    }

}));

export const UserEditModal = (props) => {
    const classes = useStyles();
    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle >プロフィール編集</DialogTitle>
            <Box className={classes.body}>
                <TextField className={classes.textField} fullWidth variant='outlined' label='表示名' size='small'></TextField>
                <TextField className={classes.textField} fullWidth variant='outlined' label='メールアドレス' size='small'></TextField>
                <TextField className={classes.textField} fullWidth variant='outlined' label='自己紹介' multiline rows={5} size='small'></TextField>
            </Box>
            <DialogActions>
                <ButtonWithIcon onClick={props.handleClose} iconSize='small' color='primary' icon='close'>キャンセル</ButtonWithIcon>
                <ButtonWithIcon onClick={props.handleClose} iconSize='small' color='primary' variant='contained' icon='send'>保存</ButtonWithIcon>
            </DialogActions>
        </Dialog>
    )
}