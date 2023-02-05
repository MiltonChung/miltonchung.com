import * as React from 'react';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { FComponent } from '../../types/commons';

type InputNativeProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputProps = {
  name: string;
  label?: string;
  type?: 'text' | 'number' | 'email';
  placeholder?: string;
  errors?: FieldErrors;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
} & InputNativeProps;

const Input: FComponent<InputProps> = ({
  type = 'text',
  name,
  placeholder = '',
  label,
  errors,
  disabled = false,
  className = '',
  ariaLabel,
  ...props
}) => {
  return (
    <div className={className ? `${className} input-container` : 'input-container'}>
      <label htmlFor={name}>{label}</label>

      <div className={disabled ? `input-disabled input-line` : 'input-line'}>
        <input
          aria-label={ariaLabel}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          autoComplete="off"
          disabled={disabled}
          {...props}
        />
      </div>
      <p className="input-errors">
        {errors[name] && (
          <span className="errorMessage">{errors[name]?.message.toString()}</span>
        )}
      </p>
    </div>
  );
};

export { Input };
