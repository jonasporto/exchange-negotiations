class NegotiationView extends View {

	template(model) {

		return `
		<table class="table table-hover table-bordered">
			<thead>
	            <tr>
	                <th onclick="negotiationController.sortByColumn('date')">Date</th>
	                <th onclick="negotiationController.sortByColumn('amount')">Amount</th>
	                <th onclick="negotiationController.sortByColumn('price')"> Price</th>
	                <th onclick="negotiationController.sortByColumn('volume')">Volume</th>
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
        		<tr>
        			<td colspan="3"></td>
        			<td>${model.negotiations.reduce((total, n) => total + n.volume, 0.0)}</td>
        		</tr>
        	</tfoot>
    	</table>
    	`;
	}
}