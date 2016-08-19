class View {
	
	constructor(el) {
		this._el = el;

		if (this.template === undefined) {
			throw new Error("Method template should be implemented in inherited classes");
		}
	}

	update(model) {
		console.log(this);
		this._el.innerHTML = this.template(model);
	}
}