import React from 'react';
import { Card, CardContent, Typography, CardActions, Grid, IconButton } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

export function PostItem(props) {
    return (
        <Card>
            <Grid container>
                <Grid item>
                    <Typography variant='subtitle2'>{props.postData.name}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='subtitle2'>{props.postData.at}</Typography>
                </Grid>
            </Grid>
            <CardContent>
                <Typography variant='body2'>{props.postData.message}</Typography>
            </CardContent>
            <CardActions>
                <IconButton><Icon>good</Icon></IconButton>
                <IconButton><Icon>bad</Icon></IconButton>
            </CardActions>
        </Card>
    )
}