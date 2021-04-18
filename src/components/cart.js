import React from 'react';
import { Formik, Form, Field } from 'formik';

const Cart = () => {
  const initialValues = {
    promoCode: '',
  };

  const onSubmit = values => console.log('Form data', values);

  return (
    <div className="col-md-5 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Your cart</span>
        <span className="badge bg-primary rounded-pill">3</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Product name</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">$12</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Second product</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">$8</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Third item</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">$5</span>
        </li>
        <li className="list-group-item d-flex justify-content-between bg-light">
          <div className="text-success">
            <h6 className="my-0">Promo code</h6>
            <small>EXAMPLECODE</small>
          </div>
          <span className="text-success">−$5</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$20</strong>
        </li>
      </ul>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="card p-2">
          <div className="input-group">
            <Field
              type="text"
              id="promoCode"
              name="promoCode"
              className="form-control"
              placeholder="Promo code"
            />
            <button type="submit" className="btn btn-secondary">
              Redeem
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Cart;
