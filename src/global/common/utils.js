export const formatDate = (date, dateTime = 'datetime') => {
	const options = { hour12: false }

	if (dateTime.includes('date')) {
		options.year = 'numeric'
		options.month = 'numeric'
		options.day = 'numeric'
	}
	if (dateTime.includes('time')) {
		options.hour = 'numeric'
		options.minute = 'numeric'
		options.second = 'numeric'
	}
	return new Intl.DateTimeFormat('en-AU', options).format(new Date(date))
}
