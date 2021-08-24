import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');
	const filteredExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	const selectedChangeHandler = (selectedYear) => setFilteredYear(selectedYear);
	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					onSelectedFilterChange={selectedChangeHandler}
					selected={filteredYear}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
