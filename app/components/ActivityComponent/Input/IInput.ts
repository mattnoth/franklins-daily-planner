interface InputProps {
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  type?: 'text' | 'password' | 'number' | 'email' | 'tel' | 'search' | 'url' | 'datetime-local';
  disabled?: boolean;
  readOnly?: boolean;
  name?: string;
  maxLength?: number;
  min?: number | string;
  max?: number | string;
  className?: string;
  id?: string;
}