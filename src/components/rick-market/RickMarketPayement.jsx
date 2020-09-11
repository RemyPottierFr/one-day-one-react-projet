import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log(error, paymentMethod);
  };

  return (
    <form className="mt-40" onSubmit={handleSubmit}>
      <CardElement
        options={{
          iconStyle: "solid",
          style: {
            base: {
              iconColor: "lightblue",
              color: "#000",
              fontWeight: 500,
              fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
              fontSize: "16px",
              fontSmoothing: "antialiased",
              ":-webkit-autofill": { color: "lightblue" },
              "::placeholder": { color: "lightblue" },
            },
            invalid: {
              iconColor: "#ffc7ee",
              color: "#ffc7ee",
            },
          },
        }}
      />
      <button disabled={!stripe} type="submit">
        Pay
      </button>
    </form>
  );
}

export default CheckoutForm;
