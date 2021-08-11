import React from 'react';
import ExpensesItem from './ExpensesItem';
import '../../App.scss';
const ExpensesList = (props) => {
	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">Expenses Not Found</h2>;
	}
	return (
		<ul className="expenses-list">
			{props.items.map((item) => (
				<ExpensesItem
					key={item.id}
					title={item.title}
					amount={item.amount}
					date={item.date}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
