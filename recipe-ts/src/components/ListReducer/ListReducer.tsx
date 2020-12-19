import React, { useReducer } from 'react';
import { initialState, reducer } from './reducer';
import './style/index.css';

export interface ListReducerProps {}


const ListReducer: React.FC<ListReducerProps> = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch({ type: 'add' });
	};

	return (
		<div className="todo-list">
			<h2>TODO List</h2>
			<ul>
				{state.items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
			<form onSubmit={submitHandler} data-testid="form">
				<div className="form-group">
					<input
						id="newItem"
						className="form-control"
						type="text"
						value={state.newItem}
						onChange={(e) =>
							dispatch({
								type: 'newItemChange',
								payload: e.target.value,
							})
						}
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
