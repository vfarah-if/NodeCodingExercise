import React, { useState } from 'react';
import './style/index.css';

export interface ListReducerProps {}

const ListReducer: React.FC<ListReducerProps> = () => {
	const [items, setItems] = useState<Array<string>>(new Array<string>());
	const [newItem, setNewItem] = useState<string>('');
	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		setItems(items.concat([newItem]));
		setNewItem('');
		event.preventDefault();
	};

	return (
		<div className="todo-list">
			<h2>TODO List</h2>
			<ul>
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
			<form onSubmit={submitHandler} data-testid="form">
				<div className="form-group">
					<input
						id="newItem"
						className="form-control"
						type="text"
						value={newItem}
						onChange={(e) => setNewItem(e.target.value)}
						placeholder="Enter new item"
					/>
				</div>
				<input
					type="submit"
					value="Add"
					className="btn btn-primary"
				></input>
			</form>
		</div>
	);
};

export default ListReducer;
