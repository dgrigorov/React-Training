import React from 'react';

import Card from '../UI/Card';
import AddUserForm from './AddUserForm';
import Wrapper from '../Helpers/Wrapper';

import classes from './AddUser.module.css';

const AddUser = (props) => {
    const saveUserDataHandler = (enteredUserData) => {
        console.log('AddUser.js');
        const userData = {
            ...enteredUserData,
            id: Math.random().toString(),
        };
        console.log(`User data is: ${JSON.stringify(userData)}`);
        props.onAddUser(userData);
    };

    return (
        <Wrapper>
            <Card className={classes.input} >
                <AddUserForm onSaveUserData={saveUserDataHandler} />
            </Card>
        </Wrapper>
    );
}

export default AddUser;