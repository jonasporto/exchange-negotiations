class DateHelper {

	constructor() {
		throw new Error('DateHelper couldn\'t be instantiated');
	}
	
	static toDate(dateString) {
		if (!/\d{4}-\d{2}-\d{2}/.test(dateString)) {
			throw new Error('String date should follows the pattern yyyy-mm-dd');
		}
		return new Date(dateString.split('-'))
	}

	static toString(date) {
		return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
	}
}