import { createValidation } from "./create-validation";

describe("Create validation", () => {
  test("Given a single checkFn that returns true, validatorFn returns true", () => {
    const checkFns = [(dato: string) => true];

    const validatorFn = createValidation(checkFns);

    const result = validatorFn("Cualquier string");

    expect(result).toBe(true);
  });

  test("Given a single checkFn that returns false, validatorFn returns false", () => {
    const checkFns = [(dato: string) => false];

    const validatorFn = createValidation(checkFns);

    const result = validatorFn("Cualquier string");

    expect(result).toBe(false);
  });

  test("Given a checkFn that returns true, and another that returns false, validatorFn returns false", () => {
    const checkFns = [(dato: string) => true, (dato: string) => false];

    const validatorFn = createValidation(checkFns);

    const result = validatorFn("Cualquier string");

    expect(result).toBe(false);
  });
  test("Given a checkFn that returns false, and another that returns true, validatorFn returns false", () => {
    const checkFns = [(dato: string) => false, (dato: string) => true];

    const validatorFn = createValidation(checkFns);

    const result = validatorFn("Cualquier string");

    expect(result).toBe(false);
  });
});
