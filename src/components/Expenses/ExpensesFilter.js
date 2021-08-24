import React from 'react';
const ExpensesFilter = (props) => {
	const changeSelectedHandler = (event) => {
		props.onSelectedFilterChange(event.target.value);
	};
	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label htmlFor="filter">filter by year</label>
				<select onChange={changeSelectedHandler} value={props.selected}>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
