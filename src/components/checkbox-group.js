import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './text-error';

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <React.Fragment>
      {label && <label>{label}</label>}
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map(option => {
            return (
              <div className="form-check" key={option.key}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label className="form-check-label" htmlFor={option.value}>
                  {option.key}
                </label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </React.Fragment>
  );
}

export default CheckboxGroup;
