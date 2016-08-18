class DateHelper {

	constructor() {
		throw new Error('DateHelper couldn\'t be instantiated');
	}
	
	static toDate(dateString) {
		return new Date(dateString.split('-'))
	}

	static toString(date) {
		return date.getDate() + '/' + (date.getMonth() + 1) + date.getFullYear();
	}
}