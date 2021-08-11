import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';

const DEMO_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: '94.21',
		date: new Date(2021, 7, 8),
	},
	{ id: 'e2', title: 'New TV', amount: '799.49', date: new Date(2021, 7, 9) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: '294.67',
		date: new Date(2021, 7, 10),
	},
	{
		id: 'e4',
		title: 'new Desk (Wooden)',
		amount: '450',
		date: new Date(2021, 7, 11),
	},
];
const App = (props) => {
	const [expenses, setExpenses] = useState(DEMO_EXPENSES);
	return (
		<div>
			<Expenses expenses={expenses} />
		</div>
	);
};

export default App;
