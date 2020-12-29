import React from 'react';

import Header from './components/Header';
import MarsRoverImages from './components/MarsRoverImages';
import ListReducer from './components/ListReducer';

import './App.css';

function App() {
	let user = undefined;
	const loginHandler = () => alert('OnLogin ...');
	const createAccountHandler = () => alert('createAccountHandler ...');

	return (
		<div className="App">
			<Header
				user={user}
				onLogin={loginHandler}
				onCreateAccount={createAccountHandler}
			/>
			<br />
			<MarsRoverImages />
			<ListReducer />
		</div>
	);
}

export default App;
