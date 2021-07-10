import React from 'react';
import BusinessList.css;
import Business from '../Business/Business.js';

class BusinessList extends React.Compenent {
	render() {
		return(
		<div class="BusinessList">
			<Business />
			<Business />
			<Business />
			<Business />
		</div>
			);
	}
}

export default BusinessList;