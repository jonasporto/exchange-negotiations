class NegotiationController {

	constructor() {
		
		let $ = document.querySelector.bind(document);
		
		this._inputDate = $('#date');
		this._inputAmount = $('#amount');
		this._inputPrice = $('#price');
		this._negotiationList = new NegotiationList();
		this._negotiationView = new NegotiationView($('#negotiation-view'));
		this._negotiationView.update(this._negotiationList);
	}
	
	add(e) {
		e.preventDefault();
		
		this._negotiationList.add(this._createNegotiation());
		this._negotiationView.update(this._negotiationList);
		this._clearForm();
	}

	_createNegotiation() {
		return new Negotiation(
			DateHelper.toDate(this._inputDate.value),
			this._inputAmount.value,
			this._inputPrice.value
		);
	}

	_clearForm() {
		this._inputDate.value = '';
		this._inputAmount.value = 1;
		this._inputPrice.value = 0.0;
		this._inputDate.focus();
	}
}