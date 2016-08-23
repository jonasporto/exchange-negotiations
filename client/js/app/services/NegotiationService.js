class NegotiationService {

	getWeekNegotiation(callback) {

		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'negotiations/week');
		
		const XHRStatus = {
			OK : 200
		};

		const XHRState = {
			COMPLETED_AND_READY_ANSWER : 4
		};

		xhr.onreadystatechange = () => {
			if (xhr.readyState == XHRState.COMPLETED_AND_READY_ANSWER) {
				if (xhr.status == XHRStatus.OK) {
					
					callback(
						null, 
						JSON.parse(xhr.responseText).map(
							object => new Negotiation(new Date(object.date), object.amount, object.value)
						)
					);
					
				} else {
					callback('Error while trying to get negotiations on server', null);
				}
			}
		};

		xhr.send();
	}
}