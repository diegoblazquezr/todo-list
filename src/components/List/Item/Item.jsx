import React from "react";
import './Item.css'

const Item = ({
	inputTodo: { input },
	deleteCard
}) => {

	return (
		<article className="card">
			<p>- {input}</p>
			<button className="btn-delete" onClick={deleteCard}>Delete</button>
		</article>
	)

}

export default Item