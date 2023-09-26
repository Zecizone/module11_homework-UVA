import { multiply } from "../index.js";

describe('multiply function', () => {
 
  it('should return correct concatenated output for n=3', () => {
    expect(multiply(3)).toBe('321');
  });

  it('should return correct concatenated output for n=5', () => {
    expect(multiply(5)).toBe('54321');
  });

  it('should return an empty string for n=0', () => {
    expect(multiply(0)).toBe('');
  });
});