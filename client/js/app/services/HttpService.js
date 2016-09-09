class HttpService {
	
	get(url) {
		return new Promise((resolve, reject) => {

			let xhr = new XMLHttpRequest();
			xhr.open('GET', url);
			
			xhr.onreadystatechange = () => {

				if (xhr.readyState == XHRState.COMPLETED_AND_READY_ANSWER) {
					if (xhr.status == XHRStatus.OK) {
						return resolve(JSON.parse(xhr.responseText));
					} 
					
					return reject(xhr.responseText);
				}
			};

			xhr.send();
		});
	}
}