import test from "node:test";
import { multiply } from "../index.js";

describe('multiply function', () => {
  it('should log numbers from n down to 1', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    multiply(3);
    expect(console.log).toHaveBeenCalledWith(3);
    expect(console.log).toHaveBeenCalledWith(2);
    expect(console.log).toHaveBeenCalledWith(1);
    consoleSpy.mockRestore();
  });
});
