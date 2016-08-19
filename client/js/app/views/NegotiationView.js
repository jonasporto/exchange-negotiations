class NegotiationView {

	constructor(el) {
		this.el = el;
	}

	_template(model) {

		return `
		<table class="table table-hover table-bordered">
			<thead>
	            <tr>
	                <th>Date</th>
	                <th>Amount</th>
	                <th>Price</th>
	                <th>Volume</th>
	            </tr>
        	</thead>
        
        	<tbody>
        		${model.negotiations.map(n => `

    				<tr>
    					<td>${DateHelper.toString(n.date)}</td>
    					<td>${n.amount}</td>
    					<td>${n.price}</td>
    					<td>${n.volume}</td>
    				</tr>
    				
        		`).join('')}
        	</tbody>
        
        	<tfoot>
        	</tfoot>
    	</table>
    	`;
	}

	update(model) {
		this.el.innerHTML = this._template(model);
	}

}