'use client'
import React, { useMemo, ChangeEvent } from 'react';
import { IInput } from './IInput';  // Adjust path if needed

/**
 * A reusable Input component.
 *
 * @param {IInput} props - Input properties
 * @param {string | number} props.value - Current value of the input
 * @param {(value: string | number) => void} props.onValueChange - Callback to handle changes in input value
 * @param {string} [props.additionalClasses] - Additional CSS classes for styling
 * 
 * ... Any other standard input properties can also be provided.
 */
export const Input: React.FC<IInput> = ({
  onValueChange,
  additionalClasses = '',
  ...props
}) => {

  const BASE_INPUT_CLASSES = "border rounded-md px-3 py-2"; // Base styles for the input

  const computedClasses = useMemo(() => {
    return `${BASE_INPUT_CLASSES} ${additionalClasses}`;
  }, [additionalClasses]);

  return (
    <input
      className={computedClasses}
      onChange={e => onValueChange(e.target.value)}
      {...props} />
  );
};
