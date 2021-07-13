import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {term: '', location: '', sortBy: 'best_match'};
		this.sortByOptions = {
			'Best Match': 'best_match',
			'Hightest Rated': 'rating',
			'Most Reviewed': 'review_count',
		};

	}
	getSortByClass(sortByOptions) {
		if(this.state.sortBy === sortByOptions) {
			return 'active';
		} else {
			return '';
		}
	}
	handleSortByChange(sortByOption) {
		this.setState({sortBy: sortByOption});
	}
	renderSortByOptions() {
  		return Object.keys(this.sortByOptions).map(sortByOption => {
  			let sortByOptionValue = this.sortByOptions[sortByOption];
  			return <li onclick={handleSortByChange.bind(this, sortByOptionValue)} className={getSortByClass(sortByOptionValue)} key={sortByOptionValue}> {sortByOption} </li>
  		});
	}
	render() {
		return (
		<div className="SearchBar">
		  <div class="SearchBar-sort-options">
		    <ul>
		      {this.renderSortByOptions()}
		    </ul>
		  </div>
		  <div className="SearchBar-fields">
		    <input placeholder="Search Businesses" />
		    <input placeholder="Where?" />
		  </div>
		  <div className="SearchBar-submit">
		    <a href="">Let's Go</a>
		  </div>
		</div>
		);
	}
}

export default SearchBar;