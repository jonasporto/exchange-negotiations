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

	post(url, data) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            
            xhr.onreadystatechange = () => {
            
                if (xhr.readyState == XHRState.COMPLETED_AND_READY_ANSWER) {

                    if (xhr.status == XHRStatus.OK) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send(JSON.stringify(data));
        });

    }
}