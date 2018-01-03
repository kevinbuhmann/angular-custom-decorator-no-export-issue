export function Convert<TTarget extends object, TInput, TOutput>(selector: (input: TInput) => TOutput) {
  return (target: any, propertyKey: string) => {
    delete target[propertyKey];

    const valueKey = Symbol();

    function get(this: any) {
      return this[valueKey];
    }

    function set(this: any, value: TInput) {
      this[valueKey] = selector(value);
    }

    Object.defineProperty(target, propertyKey, { get, set, enumerable: true, configurable: false });
  };
}
