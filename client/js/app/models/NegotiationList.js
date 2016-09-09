class NegotiationList {

	constructor() {
		this._negotiations = []
	}

	add(negotiation) {
		this._negotiations.push(negotiation);
	}

	get negotiations() {
		return [].concat(this._negotiations);
	}

	clear() {
		this._negotiations = [];
	}

	sort(impl) {
        this._negotiations.sort(impl);        
    }

    reverse() {
    	this._negotiations.reverse();        
    }
}