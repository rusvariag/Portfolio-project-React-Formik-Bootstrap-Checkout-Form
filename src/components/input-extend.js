import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './text-error';

const InputExtend = props => {
  const { label, name, text, positionClass, status, ...rest } = props;
  return (
    <div className={positionClass}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <div className="input-group has-validation">
        <span className="input-group-text">@</span>
        <Field name={name}>
          {props => {
            const { field, form, meta } = props;
            const classes = !meta.touched
              ? undefined
              : form.submitCount === 0
              ? undefined
              : meta.touched && !meta.error
              ? 'is-valid'
              : 'is-invalid';
            return (
              <input
                type="text"
                className={'form-control ' + classes}
                id={name}
                {...field}
                {...rest}
              />
            );
          }}
        </Field>
        {text && <small className="text-muted">{text}</small>}
        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
};

export default InputExtend;
