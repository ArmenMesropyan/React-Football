import React from 'react';

const Header = () => (
    <header className="home-page__header first">
        <div className="container">
            <ul className="first__elements row">
                <li className="first__element first__element--info col-md-6">
                    <h2 className="first__title">Title</h2>
                    <p className="first__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium, iure optio aperiam, excepturi animi nihil id blanditiis doloribus ratione repellendus impedit similique. Natus et rerum minus magni? Laudantium, voluptate.
                    </p>
                    <button type="button" className="first__btn">Click me</button>
                </li>
                <li className="first__element first__element--image col-md-6">
                    <img src="/images/header-image.png" alt="Eden Hazard" className="first__img"/>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;