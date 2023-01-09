import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import HeroImage from "./HeroImage";
import classes from './Header.module.css';

const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactFuc*ingMeals</h1>
                <HeaderCartButton />
            </header>
            <HeroImage />
        </React.Fragment>
    )
}

export default Header;