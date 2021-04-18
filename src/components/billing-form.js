import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './input';
import Select from './select';
import RadioButtons from './radio-buttons';
import CheckboxGroup from './checkbox-group';
import InputExtend from './input-extend';

const BillingForm = () => {
  const dropdownCountry = [
    { key: 'Choose...', value: '' },
    { key: 'United States', value: 'us' },
    { key: 'Russia', value: 'ru' },
    { key: 'China', value: 'cn' },
  ];

  const dropdownState = [
    { key: 'Choose...', value: '' },
    { key: 'California', value: 'california' },
    { key: 'Moscow', value: 'moscow' },
    { key: 'Beijing', value: 'beijing' },
  ];

  const radioOptions = [
    { key: 'Credit card', value: 'credit card' },
    { key: 'Debit card', value: 'debit card' },
    { key: 'PayPal', value: 'paypal' },
  ];

  const checkboxOptions = [
    {
      key: 'Shipping address is the same as my billing address',
      value: 'shippingOk',
    },
    { key: 'Save this information for next time', value: 'saveOk' },
  ];

  const initialValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    address: '',
    addressTwo: '',
    country: '',
    state: '',
    zip: '',
    additionInformation: [],
    paymentMethod: 'credit card',
    creditCardName: '',
    creditCardNumber: '',
    expiration: '',
    cvv: '',
  };

  const onSubmit = values => console.log(values);

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Valid first name is required.'),
    lastName: Yup.string().required('Valid last name is required.'),
    username: Yup.string().required('Your username is required.'),
    email: Yup.string().email(
      'Please enter a valid email address for shipping updates.'
    ),
    address: Yup.string().required('Please enter your shipping address.'),
    country: Yup.string().required('Please select a valid country.'),
    state: Yup.string().required('Please provide a valid state.'),
    zip: Yup.string().required('Zip code required.'),
    creditCardName: Yup.string().required('Name on card is required'),
    creditCardNumber: Yup.string().required('Credit card number is required'),
    expiration: Yup.string().required('Expiration date required'),
    cvv: Yup.string().required('Security code required'),
  });

  return (
    <div className="col-md-7 col-lg-8">
      <h4 className="mb-3">Billing address</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount={false}
        validateOnBlur={false}
      >
        {formik => {
          return (
            <Form>
              <div className="row g-3">
                <Input
                  label="First name"
                  name="firstName"
                  positionClass="col-sm-6"
                />
                <Input
                  label="Last name"
                  name="lastName"
                  positionClass="col-sm-6"
                />
                <InputExtend
                  label="Username"
                  name="username"
                  positionClass="col-12"
                  placeholder="Username"
                />
                <Input
                  label={
                    <React.Fragment>
                      Email <span className="text-muted">(Optional)</span>
                    </React.Fragment>
                  }
                  placeholder="you@example.com"
                  positionClass="col-12"
                  name="email"
                />
                <Input
                  label="Address"
                  name="address"
                  positionClass="col-12"
                  placeholder="1234 Main St"
                />
                <Input
                  label={
                    <React.Fragment>
                      Address 2 <span className="text-muted">(Optional)</span>
                    </React.Fragment>
                  }
                  name="addressTwo"
                  positionClass="col-12"
                  placeholder="Apartment or suite"
                />
                <Select
                  label="Country"
                  name="country"
                  positionClass="col-md-5"
                  options={dropdownCountry}
                  submitCount={formik.submitCount}
                />
                <Select
                  label="State"
                  name="state"
                  positionClass="col-md-4"
                  options={dropdownState}
                  submitCount={formik.submitCount}
                />
                <Input label="Zip" name="zip" positionClass="col-md-3" />
              </div>
              <hr className="my-4" />
              <CheckboxGroup
                name="additionInformation"
                options={checkboxOptions}
              />
              <hr className="my-4" />
              <h4 className="mb-3">Payment</h4>
              <RadioButtons
                name="paymentMethod"
                positionClass="my-3"
                options={radioOptions}
              />
              <div className="row gy-3">
                <Input
                  label="Name on card"
                  name="creditCardName"
                  text="Full name as displayed on card"
                  positionClass="col-md-6"
                />
                <Input
                  label="Credit card number"
                  name="creditCardNumber"
                  positionClass="col-md-6"
                />
                <Input
                  label="Expiration"
                  name="expiration"
                  positionClass="col-md-3"
                />
                <Input label="CVV" name="cvv" positionClass="col-md-3" />
              </div>
              <hr className="my-4" />
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default BillingForm;
