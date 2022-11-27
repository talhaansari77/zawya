import {validateEmail} from './Validate';
export const ValidateInput = (
  userName,
  cardNumber,
  submitError,
  setSubmitError,
) => {
  if (!userName) {
    return setSubmitError({...submitError, userNameError: 'User name is Required'});
  } else if (!cardNumber) {
    return setSubmitError({
      ...submitError,
      cardNumberError: 'Card number is Required',
    });
  }

  
  

  //

  return true;
};
