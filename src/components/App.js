import React from 'react';
import { Spinner, FootballService } from '.';

const App = () => (
    <FootballService.Consumer>
        {(FootballService) => {
            console.log('FootballService: ', FootballService);
            return <Spinner />
        }}
    </FootballService.Consumer>
)

export default App;