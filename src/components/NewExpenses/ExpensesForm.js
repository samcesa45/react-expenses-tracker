import React, { useState } from 'react';
import '../../App.scss';
const ExpensesForm = (props) => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const titleChangeHandler = (event) => setTitle(event.target.value);
	const amountChangeHandler = (event) => setAmount(event.target.value);
	const enteredDateChangeHandler = (event) =>
		setEnteredDate(event.target.value);

	const submitExpenseFormHandler = (event) => {
		event.preventDefault();
		const expensesData = {
			title: title,
			amount: amount,
			date: new Date(enteredDate),
		};
		props.onSubmitData(expensesData);
		setTitle('');
		setAmount('');
		setEnteredDate('');
		props.onCancelEditing();
	};
	return (
		<form onSubmit={submitExpenseFormHandler}>
			<div className="expenses-form">
				<div className="expenses-form__control">
					<label htmlFor="Title">Title</label>
					<input type="text" onChange={titleChangeHandler} value={title} />
				</div>
				<div className="expenses-form__control">
					<label htmlFor="Amount">Amount</label>
					<input
						type="number"
						step="0.01"
						min="0.01"
						onChange={amountChangeHandler}
						value={amount}
					/>
				</div>
				<div className="expenses-form__control">
					<label htmlFor="Date">Date</label>
					<input
						type="date"
						min="01-01-2019"
						max="11-31-2022"
						onChange={enteredDateChangeHandler}
						value={enteredDate}
					/>
				</div>
			</div>
			<div className="expenses-form__actions">
				<button type="button" onClick={props.onCancelEditing}>
					Cancel Expense
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpensesForm;
