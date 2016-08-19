class View {
	
	constructor(el) {
		this._el = el;

		if (this.template === undefined) {
			throw new Error("Method template should be implemented in inherited classes");
		}
	}

	update(model) {
		this._el.innerHTML = this.template(model);
	}
}