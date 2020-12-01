import users from './datastore.json';

export const getUsers = () => {
    console.debug(`Users from './datastore.json'`, users);
    return users;
}


console.debug("Test to see this outputted on run");
