import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './user.css';

// Utilising https://reqres.in/api/users/{id} to get fake real user details
export default function UserDetails({ id }) {
	const [user, setUser] = useState(null);
	const fetchUserData = async (id) => {
		const response = await fetch(`https://reqres.in/api/users/${id}`);
		const { data } = await response.json();
		console.debug(response, data);
		setUser(data);
	};

	useEffect(() => {
		return fetchUserData(id);
	}, [id]);

	if (!user) {
		return 'loading ...';
	}

	return (
		<details>
			<summary>
				{user?.first_name} {user?.last_name} @ {user?.email}
			</summary>
			<img src={user?.avatar} alt="Avatar"></img>
			<p>User BIO for User id '{id}'</p>
		</details>
	);
}

UserDetails.propTypes = {
	id: PropTypes.number.isRequired,
};
