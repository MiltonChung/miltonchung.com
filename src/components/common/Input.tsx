import * as React from 'react';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { FComponentWithRef } from '../../types/commons';

type InputNativeProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputProps = {
  name: string;
  label: string;
  type?: 'text' | 'number' | 'email';
  placeholder?: string;
  errors?: FieldErrors;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
} & InputNativeProps;

const WrappedInput: FComponentWithRef<InputProps, HTMLInputElement> = (
  {
    type = 'text',
    name,
    placeholder = '',
    label,
    errors,
    disabled = false,
    className = '',
    ariaLabel,
    autoComplete = 'off',
    ...props
  },
  ref
) => {
  return (
    <div className={className ? `${className} field-container` : 'field-container'}>
      <label htmlFor={name}>{label}</label>

      <div className={disabled ? `input-disabled input-line` : 'input-line'}>
        <input
          aria-label={ariaLabel}
          type={type}
          name={name}
          id={name}
          ref={ref}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          {...props}
        />
      </div>
      <p className="field-errors">
        {errors[name] && (
          <span className="errorMessage">{errors[name].message.toString()}</span>
        )}
      </p>
    </div>
  );
};

const Input = React.forwardRef(WrappedInput);

export { Input };
