export function callFunctionIfDefined(
  fn: Function | undefined,
  ...args: any[]
) {
  if (fn) {
    fn(...args);
  }
}
