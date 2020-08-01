import React from 'react';

const Header = () => (
    <header className="home-page__header first">
        <div className="container">
            <ul className="first__elements row">
                <li className="first__element">
                    <h2 className="first__title">Test Title</h2>
                    <p className="first__text">Test text</p>
                    <button type="button" className="first__btn">Click me</button>
                </li>
                <li className="first__element first__element--image">
                    <img src="/images/header-image.png" alt="Eden Hazard" />
                </li>
            </ul>
        </div>
    </header>
);

export default Header;