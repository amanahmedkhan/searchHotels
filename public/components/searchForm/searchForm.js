class searchFormCtrl {

	constructor($http, $location) {
		this.$http = $http
		this.$location = $location
	}
	
	$onInit() {
		Object.assign(this, {
			name: "Aman Ahmed Khan",
			fromDate: null,
			toDate: null,
			showMessage: false,
			emptyField: []
		})
	}

	submitForm() {
		if(this.fromDate && this.toDate){
			this.emptyField = []
			this.$location.path( "/hotels" );
			// this.$http.get('https://api.myjson.com/bins/tl0bp')
			// 	.then(res => {
			// 		console.log(res)
			// 	})
		} else {
			this.showMessage = true
			if(!this.fromDate) {
				this.emptyField.push("from Date")
			}else {
				this.emptyField.push("to Date")
			}
		}
	}
}

export default searchFormCtrl