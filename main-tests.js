const { throws, deepEqual } = require('assert');

const mod = require('./main.js');

describe('OLSKBeaconWait', function test_OLSKBeaconWait() {

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

describe('OLSKBeaconPointFunction', function test_OLSKBeaconPointFunction() {

	it('throws if param1 not string', function () {
		throws(function () {
			mod.OLSKBeaconPointFunction(null, Math.random().toString());
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if param2 not string', function () {
		throws(function () {
			mod.OLSKBeaconPointFunction(Math.random().toString(), null);
		}, /OLSKErrorInputNotValid/);
	});

	// it('returns function', function() {
	// 	deepEqual(typeof mod.OLSKBeaconPointFunction(Math.random().toString(), Math.random().toString()), 'function');
	// });

});

describe('OLSKBeaconClickFunction', function test_OLSKBeaconClickFunction() {

	it('throws if param1 not string', function () {
		throws(function () {
			mod.OLSKBeaconClickFunction(null, Math.random().toString(), Math.random().toString());
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if param2 not string', function () {
		throws(function () {
			mod.OLSKBeaconClickFunction(Math.random().toString(), null), Math.random().toString();
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if param3 not string', function () {
		throws(function () {
			mod.OLSKBeaconClickFunction(Math.random().toString(), null, Math.random().toString());
		}, /OLSKErrorInputNotValid/);
	});

	// it('returns function', function() {
	// 	deepEqual(typeof mod.OLSKBeaconClickFunction(Math.random().toString(), Math.random().toString()), 'function');
	// });

});

describe('OLSKBeaconMoveFunction', function test_OLSKBeaconMoveFunction() {

	it('throws if param1 not string', function () {
		throws(function () {
			mod.OLSKBeaconMoveFunction(null, Math.random());
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if param2 not number', function () {
		throws(function () {
			mod.OLSKBeaconMoveFunction(Math.random().toString(), null, Math.random());
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if param2 not number', function () {
		throws(function () {
			mod.OLSKBeaconMoveFunction(Math.random().toString(), Math.random(), null);
		}, /OLSKErrorInputNotValid/);
	});

	// it('returns function', function() {
	// 	deepEqual(typeof mod.OLSKBeaconMoveFunction(Math.random().toString(), Math.random().toString()), 'function');
	// });

});

describe('OLSKBeaconFillFunction', function test_OLSKBeaconFillFunction() {

	it('throws if param1 not string', function () {
		throws(function () {
			mod.OLSKBeaconFillFunction(null, Math.random().toString());
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if param2 not string', function () {
		throws(function () {
			mod.OLSKBeaconFillFunction(Math.random().toString(), null);
		}, /OLSKErrorInputNotValid/);
	});

	// it('returns function', function() {
	// 	deepEqual(typeof mod.OLSKBeaconFillFunction(Math.random().toString(), Math.random().toString()), 'function');
	// });

});

describe('OLSKBeaconSetFunction', function test_OLSKBeaconSetFunction() {

	it('throws if param1 not string', function () {
		throws(function () {
			mod.OLSKBeaconSetFunction(null, Math.random().toString());
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if param2 not string', function () {
		throws(function () {
			mod.OLSKBeaconSetFunction(Math.random().toString(), null);
		}, /OLSKErrorInputNotValid/);
	});

	// it('returns function', function() {
	// 	deepEqual(typeof mod.OLSKBeaconSetFunction(Math.random().toString(), Math.random().toString()), 'function');
	// });

});

describe('_OLSKBeaconAnimate', function _OLSKBeaconAnimate() {

	it('throws if param1 not function', function () {
		throws(function () {
			mod._OLSKBeaconAnimate(null);
		}, /OLSKErrorInputNotValid/);
	});

	// it('returns promise', function() {
	// 	deepEqual(mod._OLSKBeaconAnimate(function () {}) instanceof Promise, true);
	// });

	it('throws if param2 not number', function () {
		throws(function () {
			mod._OLSKBeaconAnimate(function () {}, 'alfa');
		}, /OLSKErrorInputNotValid/);
	});

});
