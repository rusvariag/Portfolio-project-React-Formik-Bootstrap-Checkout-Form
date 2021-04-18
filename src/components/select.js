import React from 'react';
import { useField,  Field, ErrorMessage } from 'formik';
import TextError from './text-error';

function Select(props) {
  const { label, name, options, positionClass, submitCount, ...rest } = props;
  const [field, meta, helpers] = useField(props);

  const classes = !meta.touched
    ? undefined
    : submitCount === 0
    ? undefined
    : meta.touched && !meta.error
    ? 'is-valid'
    : 'is-invalid';

  return (
    <div className={positionClass}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field
        as="select"
        className={'form-select ' + classes}
        id={name}
        name={name}
        {...rest}
      >
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Select;
