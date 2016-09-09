class NegotiationService {

	getWeekNegotiation() {
		return new Promise((resolve, reject) => {

			let xhr = new XMLHttpRequest();
			xhr.open('GET', 'negotiations/week');
			
			
			xhr.onreadystatechange = () => {

				if (xhr.readyState == XHRState.COMPLETED_AND_READY_ANSWER) {
					if (xhr.status == XHRStatus.OK) {
						
						return resolve(
							JSON.parse(xhr.responseText).map(
								object => new Negotiation(new Date(object.date), object.amount, object.value)
							)
						);
					} 
					
					return reject('Error while trying to get week negotiations on server');
				}
			};

			xhr.send();
		});
	}

	getLastWeekNegotiation() {
		
		return new Promise((resolve, reject) => {

			let xhr = new XMLHttpRequest();
			xhr.open('GET', 'negotiations/last');
			
			xhr.onreadystatechange = () => {

				if (xhr.readyState == XHRState.COMPLETED_AND_READY_ANSWER) {
					if (xhr.status == XHRStatus.OK) {
						
						return resolve(
							JSON.parse(xhr.responseText).map(
								object => new Negotiation(new Date(object.date), object.amount, object.value)
							)
						);
					} 
					
					return reject('Error while trying to get last week negotiations on server');
				}
			};

			xhr.send();
		});
	}

	getBeforeLastWeekNegotiation(callback) {

		return new Promise((resolve, reject) => {

			let xhr = new XMLHttpRequest();
			xhr.open('GET', 'negotiations/before-last');
			
			xhr.onreadystatechange = () => {

				if (xhr.readyState == XHRState.COMPLETED_AND_READY_ANSWER) {
					if (xhr.status == XHRStatus.OK) {
						
						return resolve(
							JSON.parse(xhr.responseText).map(
								object => new Negotiation(new Date(object.date), object.amount, object.value)
							)
						);
					} 
					
					return reject('Error while trying to get before last week negotiations on server');
				}
			};

			xhr.send();
		});
	}
}