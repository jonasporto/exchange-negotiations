class NegotiationController {

	constructor() {
		
		let $ = document.querySelector.bind(document);
		
		this._inputDate = $('#date');
		this._inputAmount = $('#amount');
		this._inputPrice = $('#price');
		
		// this._negotiationList = 
		// 	new NegotiationList(
		// 		negotiationList => this._negotiationView.update(negotiationList)
		// 	);
		
		let self = this;

		this._negotiationList = new Proxy(new NegotiationList(), {
			get(target, prop, receiver) {
				if (['add', 'clear'].includes(prop) && typeof(target[prop]) == typeof(Function)) {
					return function() {
						console.log(`intercepting ${prop}`);
						Reflect.apply(target[prop], target, arguments);
						self._negotiationView.update(target);
					}
				}

				return Reflect.get(target, prop, receiver);
			}
		})

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