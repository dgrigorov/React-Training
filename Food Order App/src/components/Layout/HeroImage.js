import React from "react";

import classes from './HeroImage.module.css';
import mealsImage from '../../assets/img/meals.jpg';

const HeroImage = props => {
    return (
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="" />
        </div>
    )
}

export default HeroImage;