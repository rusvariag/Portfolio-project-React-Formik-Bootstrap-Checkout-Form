import React from 'react';
import BillingForm from './billing-form';
import Cart from './cart';

const Main = () => {
  return (
    <main className="row g-5">
      <Cart />
      <BillingForm />
    </main>
  );
};

export default Main;
