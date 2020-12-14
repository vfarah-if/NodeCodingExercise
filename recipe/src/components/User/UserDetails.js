import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './user.css';
import Card from '../Card';

export default function UserDetails({ id }) {
	const [user, setUser] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const fetchUserData = async (id) => {
		const response = await fetch(`https://reqres.in/api/users/${id}`);
		const { data } = await response.json();
		console.debug(response, data);
		setUser(data);
	};

	useEffect(() => {
		fetchUserData(id);
		setIsLoaded(true);
	}, [id]);

	if (!user && !isLoaded) {
		return 'loading ...';
	}

	if (!user && isLoaded) {
		return (
			<Card>
				<p>No user details for User id '{id}'</p>
			</Card>
		);
	}

	return (
		<Card>
			<div className="container">
				<h4>
					<b>{user?.first_name} {user?.last_name}</b>
				</h4>
				<p><strong>Email:</strong>{user?.email}</p>
				<img src={user?.avatar} alt="Avatar"></img>
				<p>User BIO for User id '{id}'</p>
			</div>								
		</Card>
	);
}

UserDetails.propTypes = {
	id: PropTypes.number.isRequired,
};
