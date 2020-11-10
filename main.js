const uFlatten = function (inputData) {
	return [].concat.apply([], inputData);
};

const mod = {

	OLSKBeaconWait (inputData) {
		if (typeof inputData !== 'undefined' && typeof inputData !== 'number') {
			throw new Error('OLSKErrorInputNotValid');
		}

		return new Promise(function (resolve) {
			return setTimeout(resolve, inputData || 1000);
		});
	},

};

Object.assign(exports, mod);
