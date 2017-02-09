module.exports = {
	makeDeviceID() {
		return 'e' + Math.random().toFixed(15).toString().substring(2, 17);
	}
}
