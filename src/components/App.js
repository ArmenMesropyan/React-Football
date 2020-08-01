import React from 'react';
import { Spinner, withFootballService } from '.';

const App = ({ footballService }) => {
    console.log('footballService: ', footballService);
    return (
        <Spinner />
    )
}

export default withFootballService()(App);