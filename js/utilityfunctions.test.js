import { isEmpty, checkIfEmpty, setValidationRes } from './utilityFunctions';
let result;

test('Dummy test', () => {
	result = 2 * 3;
	expect(result).toBe(6);
	result = true;
	expect(result).toBe(true);
});

test('isEmty()', () => {
	result = isEmpty('');
	expect(result).toBeTruthy();
	result = isEmpty(' ');
	expect(result).toBeFalsy();
});

test('checkIfEmpty()', () => {
	result = checkIfEmpty(' ');
	let expectedResult = { valid: false, error: 'Must not be empty' };
	expect(result).toEqual(expectedResult);
	result = checkIfEmpty('John Doe');
	expect(result).toEqual({ valid: true });
	result = checkIfEmpty('John');
	expect(result.error).toBeUndefined();
});
