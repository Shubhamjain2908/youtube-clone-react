import { Grid } from '@material-ui/core';
import React from 'react';
import youtube from './api/youtube';
import { SearchBar, VideoDetails, VideoList } from './components/index';

class App extends React.Component {
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', { params: { q: searchTerm } });
    console.log('res=> ', response);
  }

  render() {
    return (
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails />
            </Grid>
            <Grid item xs={4}>
              <VideoList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
