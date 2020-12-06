/**
 * Asserts "expected" versus "actual",
 * 'failing' the assertion (via Error) if a difference is found.
 *
 * @param {String} message The comparison message passed by the user
 * @param {*} expected The expected item
 * @param {*} actual The actual item
 */
function assertEquals(message, expected, actual) {
	console.debug("+", actual);
	console.debug("=", expected);
	if (
		(isString(expected) && isString(actual)) ||
		(isNumber(expected) && isNumber(actual))
	) {
		return assertStringsOrNumbersAreEqual(message, expected, actual);
	}

	if (isArray(expected) && isArray(actual)) {
		return assertArraysAreEqual(message, expected, actual);
	}

	if (isArray(expected) && isObject(actual)) {
		throw new Error(
			`${message}: Expected type Array but found type Object`
		);
	}

	if (isObject(actual) && isNull(expected)) {
		throw new Error(`${message}: Expected type Null but found type Object`);
	}

	if (isNull(actual) && isObject(expected)) {
		throw new Error(`${message}: Expected type Object but found type Null`);
	}

	if (isObject(expected) && isObject(actual)) {
		return assertObjectsAreEqual(message, expected, actual);
	}

	if (expected !== actual) {
		throw new Error(
			`${message}: Expected "${expected}" but found "${actual}"`
		);
	}
}

function assertStringsOrNumbersAreEqual(message, expected, actual) {
	if (expected !== actual) {
		throw new Error(
			`${message}: Expected "${expected}" but found "${actual}"`
		);
	}
}

function assertArraysAreEqual(message, expected, actual) {
	if (expected.length !== actual.length) {
		throw new Error(
			`${message}: Expected array length "${expected.length}" but found "${actual.length}"`
		);
	}
	expected.sort();
	actual.sort();
	for (let index = 0; index < actual.length; index++) {
		var firstExpected = expected[index];
		var secondActual = actual[index];
		assertEquals(message, firstExpected, secondActual);
	}
}

function assertObjectsAreEqual(message, expected, actual) {
	for (const key in expected) {
		console.debug(`[${key}] of `, expected, actual);
		if (expected.hasOwnProperty(key) && actual.hasOwnProperty(key)) {
			const expectedProperty = expected[key];
			const actualProperty = actual[key];
			assertEquals(message, expectedProperty, actualProperty);
		} else {
			const actualValue = actual[key];
			if (actualValue) {
				throw new Error(
					`${message}: Expected "${key}" but found "${actualValue}"`
				);
			} 
			throw new Error(
				`${message}: Expected "${key}" but was not found`
			);
		}
	}
}

function isString(value) {
	return Object.prototype.toString.call(value) === "[object String]";
}

function isArray(value) {
	return Object.prototype.toString.call(value) === "[object Array]";
}

function isObject(value) {
	return Object.prototype.toString.call(value) === "[object Object]";
}

function isNull(value) {
	return Object.prototype.toString.call(value) === "[object Null]";
}

function isNumber(value) {
	return Object.prototype.toString.call(value) === "[object Number]";
}

/* -- Test running code:  --- */

/**
 * Runs a "assertEquals" test.
 *
 * @param {String} message The initial message to pass
 * @param {*} expected Expected item
 * @param {*} actual The actual item
 */
function runTest({ message, expected, actual }) {
	try {
		assertEquals(message, expected, actual);
	} catch (error) {
		return error.message;
	}
}

function runAll() {
	var complexObject1 = {
		propA: 1,
		propB: {
			propA: [1, { propA: "a", propB: "b" }, 3],
			propB: 1,
			propC: 2,
		},
	};
	var complexObject1Copy = {
		propA: 1,
		propB: {
			propA: [1, { propA: "a", propB: "b" }, 3],
			propB: 1,
			propC: 2,
		},
	};
	var complexObject2 = {
		propA: 1,
		propB: {
			propB: 1,
			propA: [1, { propA: "a", propB: "c" }, 3],
			propC: 2,
		},
	};
	var complexObject3 = {
		propA: 1,
		propB: {
			propA: [1, { propA: "a", propB: "b" }, 3],
			propB: 1,
		},
	};

	var testCases = [
		{ message: "Test 01", expected: "abc", actual: "abc" },
		{ message: "Test 02", expected: "abcdef", actual: "abc" },
		{ message: "Test 03", expected: ["a"], actual: { 0: "a" } },
		{ message: "Test 04", expected: ["a", "b"], actual: ["a", "b", "c"] },
		{
			message: "Test 05",
			expected: ["a", "b", "c"],
			actual: ["a", "b", "c"],
		},
		{
			message: "Test 06",
			expected: complexObject1,
			actual: complexObject1Copy,
		},
		{
			message: "Test 07",
			expected: complexObject1,
			actual: complexObject2,
		},
		{
			message: "Test 08",
			expected: complexObject1,
			actual: complexObject3,
		},
		{ message: "Test 09", expected: null, actual: {} },
	];

	assertionFailures = testCases
		.map(runTest)
		.filter((result) => result !== undefined)
		.forEach(addToList);
}

function addToList(message) {
	console.log(message);
}

runAll();
