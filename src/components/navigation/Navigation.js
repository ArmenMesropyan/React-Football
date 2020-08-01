import React from 'react';

const Navigation = () => (
    <nav className="home-page__navigation main-nav">
        <div className="container">
            <ul className="main-nav__list">
                <li className="main-nav__item main-nav__item--logo logo">
                    <strong className="logo__text">
                        <span className="logo__text logo__text--small">Football</span>
                        <span className="logo__text logo__text--big">X</span>
                    </strong>
                </li>
                <li className="main-nav__item main-nav__links">
                    <a href="#" className="main-nav__link">Home</a>
                    <a href="#" className="main-nav__link">Leagues</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navigation;