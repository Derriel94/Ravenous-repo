import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			location: '', 
			sortBy: 'best_match',
		};
		this.sortByOptions = {
			'Best Match': 'best_match',
			'Hightest Rated': 'rating',
			'Most Reviewed': 'review_count',
		};
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);

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
	handleTermChange(event) {
		this.setState({term: event.target.value});
	}
	handleLocationChange(event) {
		this.setState({location: event.target.value});
	}
	renderSortByOptions() {
  		return Object.keys(this.sortByOptions).map(sortByOption => {
  			let sortByOptionValue = this.sortByOptions[sortByOption];
  			return <li onclick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass.bind(sortByOptionValue)} key={sortByOptionValue}> {sortByOption} </li>
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
		    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
		    <input onChange={this.hanldeLocationChange} placeholder="Where?" />
		  </div>
		  <div className="SearchBar-submit">
		    <a href="">Let's Go</a>
		  </div>
		</div>
		);
	}
}

export default SearchBar;