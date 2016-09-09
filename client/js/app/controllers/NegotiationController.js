class NegotiationController {

	constructor() {
		
		let $ = document.querySelector.bind(document);
		
		this._inputDate = $('#date');
		this._inputAmount = $('#amount');
		this._inputPrice = $('#price');

		this._order_by = '';
		
		this._negotiationList = new Bind(
			new NegotiationList(), 
			new NegotiationView($('#negotiation-view')), 
			'add', 
			'clear',
			'sort',
			'reverse'
		);

		this._message = new Bind(
			new Message(), 
			new MessageView($('#message-view')), 
			'text'
		);
	}
	
	add(e) {
		e.preventDefault();
		try {
			this._negotiationList.add(this._createNegotiation());
			this._message.text = 'Negotiation was successfully added !';
			this._clearForm();
		} catch(error) {
            this._mensage.text = error;
        }
	}

	importNegotiation() {
		
		let service = new NegotiationService();
		
		Promise.all([
			service.getWeekNegotiation(),
			service.getLastWeekNegotiation(),
			service.getBeforeLastWeekNegotiation()
		])
		.then(negotiations => {
			negotiations
				.reduce((flattened, array) => flattened.concat(array), [])
				.forEach(negotiation => this._negotiationList.add(negotiation));
			this._message.text = 'Negotiation was successfully imported';
		})
		.catch(error => this._message.text = error);
	}

	sortByColumn(column) {
		
		if (this._order_by == column) {
			return this._negotiationList.reverse();
		}
		
		this._negotiationList.sort((a, b) => a[column] - b[column]); 		
		this._order_by = column;
	}

	_createNegotiation() {
		return new Negotiation(
			DateHelper.toDate(this._inputDate.value),
			this._inputAmount.value,
			this._inputPrice.value
		);
	}

	clear() {

		this._negotiationList.clear();
		this._message.text = 'Negotiation was successfully cleared !';
	}

	_clearForm() {

		this._inputDate.value = '';
		this._inputAmount.value = 1;
		this._inputPrice.value = 0.0;
		this._inputDate.focus();
	}
}