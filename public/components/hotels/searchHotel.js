class searchHotelCtrl {

	constructor($http){
		this.$http = $http
	}

	$onInit(){
		this.hotels = [];
		this.nameFilter = '',
		this.priceFilter = 200;
		this.$http.get('https://api.myjson.com/bins/tl0bp')
			.then(res => {
				console.log(res)
				this.hotels = res.data.hotels
			})
	}

	nameFilterHotel(name) {
		return this.hotels.forEach((item) => {
			return item.name == name
		})
	}

	filterHotels(price) {
		this.hotels = this.hotels.filter((item) => {
			return item.price <= price
		})
		return this.hotels
	}
}

export default searchHotelCtrl