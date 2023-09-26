export function multiply(n) {
	let result = '';
  for (let i = n; i >= 1; --i) {
    result += i;
  }
  return result;
}

multiply(3);