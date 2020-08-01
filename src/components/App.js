import React from 'react';
import './App.scss';
import { Navigation, Header } from '.';

const App = () => (
    <div className="home-page">
        <Navigation />
        <main className="home-page__content">
            <h1 className="visually-hidden">Football Application - Get actually information about soccer</h1>
            <Header />
        </main>
    </div>
)

export default App;