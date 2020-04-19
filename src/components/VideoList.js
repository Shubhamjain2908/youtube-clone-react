import { Grid } from '@material-ui/core';
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const listOfVideos = videos.map((video, i) => <VideoItem key={i} video={video} />);
    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    );
}

export default VideoList;
