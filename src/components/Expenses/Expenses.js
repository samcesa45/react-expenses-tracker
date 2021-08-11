import React from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
const Expenses = (props) => {
	return (
		<div>
			<Card className="expenses">
				<ExpensesList items={props.expenses} />
			</Card>
		</div>
	);
};

export default Expenses;
