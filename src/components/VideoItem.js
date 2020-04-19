import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

const VideoItem = ({ video }) => {
    const { snippet } = video;
    return (
        <Grid item xs={12}>
            <Paper style={{ display: 'flex', alignItems: 'centre' }}>
                <img style={{ marginRight: '20px' }} alt="thumbnail" src={snippet.thumbnails.medium.url} />
                <Typography variant="subtitle1"><b>{snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;
