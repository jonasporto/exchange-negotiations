class NegotiationController {

	constructor() {
		
		let $ = document.querySelector.bind(document);
		
		this._inputDate = $('#date');
		this._inputAmount = $('#amount');
		this._inputPrice = $('#price');
		
		this._negotiationList = new NegotiationList(this, function(negotiationList) {
			this._negotiationView.update(negotiationList);
		});
		
		this._negotiationView = new NegotiationView($('#negotiation-view'));
		this._negotiationView.update(this._negotiationList);
		
		this._message = new Message();
		this._messageView = new MessageView($('#message-view'));
	}
	
	add(e) {
		e.preventDefault();
		
		this._negotiationList.add(this._createNegotiation());
		
		this._message.text = 'Negotiation was successfully added !';
		this._messageView.update(this._message);
		
		this._clearForm();
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
		this._messageView.update(this._message);
	}

	_clearForm() {

		this._inputDate.value = '';
		this._inputAmount.value = 1;
		this._inputPrice.value = 0.0;
		this._inputDate.focus();
	}
}