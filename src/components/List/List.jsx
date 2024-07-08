import React, { useState } from "react";
import './List.css'
import Item from "./Item/Item";
import { v4 as uuidv4 } from 'uuid';
import data from './data';

const List = () => {

	const [items, setItems] = useState(data);
	const [values, setValues] = useState({
		input: ''
	});

	const renderItems = () => items.map((item, i) =>
		<Item
			key={uuidv4()}
			inputTodo={item}
			deleteCard={() => deleteItem(i)}
		/>
	);

	const clearItems = () => setItems([]);

	const resetItems = () => setItems(data);

	const deleteItem = (pos) => {
		const remainingItems = items.filter((item, index) => index !== pos);
		setItems(remainingItems);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const inputTodo = e.target.inputTodo.value;
		const newItem = { input: inputTodo };
		setItems([...items, newItem]);
		e.target.inputTodo.value = '';
	}

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		})
	}

	return (
		<>
			<section id="section-todo">
				<h1>TODO LIST</h1>
				<article>
					<form id="form-todo" onSubmit={handleSubmit}>
						<input type="text" id="inputTodo" name="inputTodo" placeholder="New task..." onChange={handleChange}></input>
						{
							values.inputTodo ?
								<input type="submit" value="ADD"></input> :
								<input type="submit" value="ADD" disabled></input>
						}
					</form>
				</article>
			</section>
			<section id="btn-misc">
				<button id="btn-reset-all" onClick={resetItems}>Reset All</button>
				<button className="btn-delete" onClick={clearItems}>Delete All</button>
			</section>
			<section id="section-list">
				{renderItems()}
			</section>
		</>
	)

}

export default List;