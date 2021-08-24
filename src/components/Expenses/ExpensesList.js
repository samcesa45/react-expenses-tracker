import React from 'react';
import ExpensesItem from './ExpensesItem';
import '../../App.scss';
const ExpensesList = (props) => {
	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
	}
	return (
		<ul className="expenses-list">
			{props.items.map((item) => (
				<ExpensesItem
					key={item.id}
					date={item.date}
					title={item.title}
					amount={item.amount}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
