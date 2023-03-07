export function calculator(...operands: any) {
  return operands.reduce(
    (a: any, b: any) => a + b, 0
  );
}