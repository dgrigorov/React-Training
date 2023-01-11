import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
            const response = await fetch('https://react-movies-app-fb12a-default-rtdb.europe-west1.firebasedatabase.app/Meals.json');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedMeals = [];

            for (const key in responseData) {
                const mealObj = responseData[key];
                loadedMeals.push({
                    id: key,
                    name: mealObj.name,
                    description: mealObj.description,
                    price: mealObj.price
                });
            }

            setIsLoading(false);
            setMeals(loadedMeals);
        };
        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading) {
        return (
            <section className={classes.mealsLoading}>
                <Card>
                    <p>Loading...</p>
                </Card>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.mealsError}>
                <Card>
                    <p>{httpError}</p>
                </Card>
            </section>
        );
    }

    const mealsList = meals.map((meal) => (
        <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
        </section>
    );
};

export default AvailableMeals;
