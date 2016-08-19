class NegotiationList {

	constructor(context, callback) {
		this._negotiations = []
		this._callback = callback;
		this._context = context;
	}

	add(negotiation) {
		this._negotiations.push(negotiation);
		Reflect.apply(this._callback, this._context, [this]);
	}

	get negotiations() {
		return [].concat(this._negotiations);
	}

	clear() {
		this._negotiations = [];
		Reflect.apply(this._callback, this._context, [this]);
	}
}