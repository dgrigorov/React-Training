import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';


const AddUserForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState('');

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = event => {
        event.preventDefault();

        const enteredUsername = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid name and age (non-empty values are not allowed)'
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter an age above 1'
            });
            return;
        }

        const userData = {
            name: enteredUsername,
            age: enteredAge
        };

        props.onSaveUserData(userData);
        // setEnteredUsername('');
        // setEnteredAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    // const usernameChangeHandler = event => {
    //     setEnteredUsername(event.target.value);
    // };

    // const ageChangeHandler = event => {
    //     setEnteredAge(event.target.value);
    // };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }

            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <div>
                        <label htmlFor="username">Username</label>
                        {/* <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername} /> */}
                        <input id="username" type="text" ref={nameInputRef} />
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        {/* <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge} /> */}
                        <input id="age" type="number" ref={ageInputRef} />
                    </div>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUserForm;
