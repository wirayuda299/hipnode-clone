import type { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import type { FieldValues, Path, UseFormReturn } from 'react-hook-form';

type UseHandleEnterProps<T extends FieldValues, K> = {
  form: UseFormReturn<T>;
  fields: {
    [key: string]: {
      state: any[K];
      setState: Dispatch<SetStateAction<any[K]>>;
    };
  };
};

const useHandleEnter = <T extends FieldValues, K>({
  form,
  fields,
}: UseHandleEnterProps<T, K>) => {
  const handleEnter = (
    e: KeyboardEvent<HTMLInputElement>,
    field: string,
    value: string,
  ) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      let newValues: any[T] = [];

      if (fields[field]) {
        newValues = [...fields[field].state, value];
        fields[field].setState(newValues);
        form.setValue(field as Path<T>, newValues);
      }
    }
  };

  return { handleEnter };
};

export default useHandleEnter;
