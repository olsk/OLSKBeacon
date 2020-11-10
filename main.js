const mod = {

	OLSKBeaconWait (inputData) {
		if (typeof inputData !== 'undefined' && typeof inputData !== 'number') {
			throw new Error('OLSKErrorInputNotValid');
		}

		return new Promise(function (resolve) {
			return setTimeout(resolve, inputData || 1000);
		});
	},

	OLSKBeaconPointFunction (param1, param2) {
		if (typeof param1 !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof param2 !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		const startRect = document.querySelector(param1).getBoundingClientRect();
		const endRect = document.querySelector(param2).getBoundingClientRect();

		return function (pct) {
			return (function (el, left, top) {
				el.style.left = left + 'px';
				el.style.top = top + 'px';
			})(
				document.querySelector(param1),
				startRect.left - (startRect.left - (endRect.left + endRect.width / 2 - startRect.width / 2)) * pct,
				startRect.top - (startRect.top - (endRect.top + endRect.height / 2 - startRect.height / 2)) * pct,
			);
		};
	},

	OLSKBeaconClickFunction (param1, param2, param3) {
		if (typeof param1 !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof param2 !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof param3 !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		const state = {
			didClick: false,
			didTouchDown: false,
			didTouchUp: false,
		};

		const start = performance.now();

		return function (pct) {
			const time = performance.now() - start;

			if (!state.didClick) {
				(function (el, etype) {
					if (el.fireEvent) {
					  return el.fireEvent('on' + etype);
					}

					const evObj = document.createEvent('Events');
					evObj.initEvent(etype, true, false);
					el.dispatchEvent(evObj);
				})(document.querySelector(param1), 'click');

				state.didClick = true;
			}

			if (!state.didTouchDown) {
				document.querySelector(param2).classList.add(param3);

				state.didTouchDown = true;

				return
			}

			if (!state.didTouchUp) {
				document.querySelector(param2).classList.remove(param3);

				state.didTouchUp = true;
				
				return
			}
		};
	},

	OLSKBeaconMoveFunction (param1, param2, param3) {
		if (typeof param1 !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof param2 !== 'number') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof param3 !== 'number') {
			throw new Error('OLSKErrorInputNotValid');
		}

		const startRect = document.querySelector(param1).getBoundingClientRect();
		return function (pct) {
			return (function (el, left, top) {
				el.style.left = left + 'px';
				el.style.top = top + 'px';
			})(
				document.querySelector(param1),
				startRect.left - (startRect.left - param2) * pct,
				startRect.top - (startRect.top - param3) * pct,
			);
		};
	},

	_OLSKBeaconAnimate (param1, param2) {
		if (typeof param1 !== 'function') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof param2 !== 'undefined' && typeof param2 !== 'number') {
			throw new Error('OLSKErrorInputNotValid');
		}

		// jsanimation/index.js at master · allenhwkim/jsanimation https://github.com/allenhwkim/jsanimation/blob/master/src/index.js

		const start = performance.now();
		return new Promise(function(resolve) {
			const easeInOut = function(n) {
				return 0.5 * (Math.sin((n - 0.5) * Math.PI) + 1);
			};

		  requestAnimationFrame(function animate(time) {
		    let timeFraction = (time - start) / (param2 || 650);
		    (timeFraction > 1) && (timeFraction = 1);
		    param1(easeInOut(timeFraction), timeFraction);
		    timeFraction < 1 ? requestAnimationFrame(animate) : resolve();
		  });
		});
	},

};

Object.assign(exports, mod);
