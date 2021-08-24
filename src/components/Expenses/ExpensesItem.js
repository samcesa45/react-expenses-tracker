import React from 'react';
import Card from '../UI/Card';
import ExpensesDate from './ExpensesDate';
const ExpensesItem = (props) => {
	return (
		<li>
			<Card className="expenses-item">
				<ExpensesDate date={props.date} />
				<div className="expenses-item__description">
					<h2>{props.title}</h2>
					<div className="expenses-item__amount">${props.amount}</div>
				</div>
			</Card>
		</li>
	);
};

export default ExpensesItem;
