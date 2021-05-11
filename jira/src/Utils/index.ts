import _ from "lodash";
import { useEffect, useState } from "react";

export const cleanObject = (obj: { name: string; personId: string }) => {
  return _.pickBy(_.omitBy(obj, _.isNil), (v: string) => v !== "");
};

export const useMount = (callback: { (): void; (): void }) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

//后面用范形
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
