type CheckFn = (data: string) => boolean;

export function createValidation(checkFns: CheckFn[]) {
  return (data: string) => {
    return checkFns.every((checkFn) => {
      return checkFn(data);
    });
  };
}
