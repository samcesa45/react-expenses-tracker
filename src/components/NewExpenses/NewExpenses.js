import React, { useState } from 'react';
import ExpensesForm from './ExpensesForm';
import '../../App.scss';
const NewExpenses = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const addExpensesHandler = (enteredExpenses) => {
		const expensesData = {
			...enteredExpenses,
			id: Math.random().toString(),
		};
		props.onAddExpenses(expensesData);
	};
	const editNewFormHandler = () => setIsEditing(true);
	const cancelEditingHandler = () => setIsEditing(false);
	return (
		<div className="new-expenses">
			{isEditing && (
				<ExpensesForm
					onSubmitData={addExpensesHandler}
					onCancelEditing={cancelEditingHandler}
				/>
			)}
			{!isEditing && (
				<button type="button" onClick={editNewFormHandler}>
					Add New Expenses
				</button>
			)}
		</div>
	);
};

export default NewExpenses;
