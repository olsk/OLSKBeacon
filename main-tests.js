const { throws, deepEqual } = require('assert');

const mod = require('./main.js');

describe('OLSKBeaconWait', function OLSKBeaconWait() {

	it('returns promise', function() {
		deepEqual(mod.OLSKBeaconWait() instanceof Promise, true);
	});

	it('resolves after 1000', function (done) {
		const item = [];

		setTimeout(function () {
			deepEqual(item, []);
		}, 990);

		setTimeout(function () {
			deepEqual(item, [null]);

			done();
		}, 1010);

		mod.OLSKBeaconWait().then(function () {
			item.push(...arguments)
		})
	});

	it('throws if not number', function () {
		throws(function () {
			mod.OLSKBeaconWait(Math.random().toString());
		}, /OLSKErrorInputNotValid/);
	});

	it('resolves after input', function (done) {
		const item = [];

		setTimeout(function () {
			deepEqual(item, []);
		}, 40);

		setTimeout(function () {
			deepEqual(item, [null]);

			done();
		}, 60);

		mod.OLSKBeaconWait(50).then(function () {
			item.push(...arguments)
		})
	});

});
