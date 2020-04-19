import { Paper, TextField } from '@material-ui/core';
import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }

    handleChange = (event) => this.setState({ searchTerm: event.target.value });

    handleSubmit = (event) => {
        console.log('EV => ', event);
        event.peventDefault();
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);
    }

    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField label="Search..." onChange={this.handleChange}></TextField>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;
