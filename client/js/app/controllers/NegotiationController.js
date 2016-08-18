class NegotiationController {

	constructor() {
		
		let $ = document.querySelector.bind(document);
		
		this._inputDate = $('#date');
		this._inputAmount = $('#amount');
		this._inputPrice = $('#price');
	}
	
	add(e) {
		e.preventDefault();
		let negotiation = new Negotiation(
			DateHelper.toDate(this._inputDate.value),
			this._inputAmount.value,
			this._inputPrice.value
		);

		console.log(negotiation);
	}
}