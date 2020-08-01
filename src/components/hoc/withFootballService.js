import React, { useContext } from 'react';
import { FootballService } from '..';

const withFootballService = () => (View) => {
    return (props) => {
        const footballService = useContext(FootballService);
        return <View {...props} footballService={footballService}/>
    }
}

export default withFootballService;