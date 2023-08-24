import { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  onValueChange: (value: string | number) => void;
  additionalClasses?: string;
}