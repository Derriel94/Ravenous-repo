const apiKey ='vuBIjCzHXibunnMESc_EAMoH1Sd1tQ2zXevK3hB6TR4N7sKHGg23M4PCu_TcUXuA8pW2elxpOLCTpoaM9_D3dRA8sm9XYT87TfUKFrir48x-MU-b_Qisk29ExfsGYXYx';

const Yelp = {
	searchYelp(term, location, sortBy){
		return fetch(`https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
					headers: {
						Authorization: `Bearer ${apiKey}`,
						},
			}).then(response => {
				return response.json();
			}).then(jsonResponse => {
				if (jsonResponse.businesses) {
					return jsonResponse.businesses.map(business => ({
							id: business.id,
							imageSrc: business.image_url,
							name: business.name,
							address: business.location.address1,
							city: business.location.city,
							state: business.location.state,
							zipCode: business.location.zipe_code,
							category: business.categories[0].title,
							rating: business.rating,
							reviewCount: business.review_count,

					}));
				}
			});
	//the return statement above will have a promise that
	//will ultimatley resolve to our list of businesses.


}
};
export default Yelp;