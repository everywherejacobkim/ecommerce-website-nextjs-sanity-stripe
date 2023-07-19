import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51LuP7uBznyMh4gZDjlTua7TFlNzYCHou4SU0GijcyGrJdVU99smT4hsUQGaPqjMLFyONXXJB5guNlc1EETcbuefo00Rs5UuyWT');
  }

  return stripePromise;
}

export default getStripe;

