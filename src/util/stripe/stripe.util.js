import { loadStripe } from "@stripe/stripe-js";

export const stripPromise = loadStripe(
  `${import.meta.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
);
