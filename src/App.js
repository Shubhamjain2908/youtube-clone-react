import { Grid } from '@material-ui/core';
import React from 'react';
import { SearchBar, VideoDetails, VideoList } from './components/index';
// import youtube from './api/youtube';

const App = () => {
  return (
    <Grid justify="centre" container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
          <Grid item xs={8}>
            <VideoList />
          </Grid>
          <Grid item xs={4}>
            <VideoDetails />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
