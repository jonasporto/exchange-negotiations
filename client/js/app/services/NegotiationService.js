class NegotiationService {

	constructor() {
		this._http = new HttpService();
	}

	getWeekNegotiation() {
		return new Promise((resolve, reject) => {
			this._http.get('negotiations/week')
				.then(negotiations => {
					resolve(negotiations.map(
						object => new Negotiation(new Date(object.date), object.amount, object.value)
					));
				})
				.catch(error => {
					console.error(error);
					reject('Error while trying to get week negotiations on server');
				});
		});
	}

	getLastWeekNegotiation() {
		
		return new Promise((resolve, reject) => {

			this._http.get('negotiations/last')
				.then(negotiations => {
					resolve(negotiations.map(
						object => new Negotiation(new Date(object.date), object.amount, object.value)
					));
				})
				.catch(error => {
					console.error(error);
					reject('Error while trying to get last week negotiations on server');
				});
		});
	}

	getBeforeLastWeekNegotiation(callback) {

		return new Promise((resolve, reject) => {

			this._http.get('negotiations/before-last')
				.then(negotiations => {
					resolve(negotiations.map(
						object => new Negotiation(new Date(object.date), object.amount, object.value)
					));
				})
				.catch(error => {
					console.error(error);
					reject('Error while trying to get before last week negotiations on server');
				});
		});
	}
}