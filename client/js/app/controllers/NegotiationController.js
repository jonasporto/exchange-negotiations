class NegotiationController {

	constructor() {
		
		let $ = document.querySelector.bind(document);
		
		this._inputDate = $('#date');
		this._inputAmount = $('#amount');
		this._inputPrice = $('#price');
		
		this._negotiationList = new Bind(
			new NegotiationList(), 
			new NegotiationView($('#negotiation-view')), 
			'add', 
			'clear'
		);

		this._message = new Bind(
			new Message(), 
			new MessageView($('#message-view')), 
			'text'
		);
	}
	
	add(e) {
		e.preventDefault();
		
		this._negotiationList.add(this._createNegotiation());
		this._message.text = 'Negotiation was successfully added !';
		this._clearForm();
	}

	importNegotiation() {
		
		let service = new NegotiationService();
		service.getWeekNegotiation((error, negotiations) => {
			
			if (error) {
				this._message.text = error;
				return;
			}

			negotiations.forEach(negotiation => this._negotiationList.add(negotiation));
			this._message.text = 'Negotiation was successfully imported';
		});
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