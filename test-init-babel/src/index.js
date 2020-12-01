import users from './datastore.json';

export const getUsers = () => {
    console.debug(`Users from './datastore.json'`, users);
    return users;
}
