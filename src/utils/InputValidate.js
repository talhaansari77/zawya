import {validateEmail} from './Validate';
export const ValidateInput = (
  email,
  password,
  submitError,
  setSubmitError,
) => {
 
  if (!email) {
    return setSubmitError({...submitError, emailError: 'email is Required'});
  } else if (!password) {
    return setSubmitError({
      ...submitError,
      passwordError: 'password is Required',
    });
  }

  
  

  //

  return true;
};
