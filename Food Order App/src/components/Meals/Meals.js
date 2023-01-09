import React, { Fragment } from 'react';

import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals = props => {
    <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
};

export default Meals;