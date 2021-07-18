import { useState, useEffect } from "react";

const storage = {
  getItem(key: string, initialValue: any) {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const unparsedValue = window.localStorage[key];
      if (typeof unparsedValue === "undefined") {
        return initialValue;
      }
      return JSON.parse(unparsedValue);
    } catch (error) {
      return initialValue;
    }
  },

  setItem(key: string, value: any) {
    window.localStorage[key] = JSON.stringify(value);
  },
};

export default function useLocalStorage<T>(key: string, initialValue: T): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    setValue(storage.getItem(key, initialValue));
  }, [key, initialValue]);

  const setItem = (newValue: T) => {
    setValue(() => newValue);
    storage.setItem(key, newValue);
  };

  return [value, setItem];
}
