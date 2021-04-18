import React from 'react';
import { Field } from 'formik';

function RadioButtons(props) {
  const { name, options, positionClass, ...rest } = props;
  return (
    <div className={positionClass}>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map(option => {
            return (
              <div className="form-check" key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  className="form-check-input"
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label className="form-check-label" htmlFor={option.value}>
                  {option.key}
                </label>
              </div>
            );
          });
        }}
      </Field>
    </div>
  );
}

export default RadioButtons;
