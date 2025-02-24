// TODO: To check whether the values are empty or not
export const validateEmptyValues = (...args) => {
  // console.log('FROM VALIDATE FUNC-----------', ...args);

  // Iterate over the object's key-value pairs
  for (const [key, value] of Object.entries(...args)) {
    // Check if the value is empty, null, or undefined
    if (value === '' || value === undefined || value === null) {
      // If any value is invalid, return false and the key
      return {isValid: false, emptyKey: key};
    }
  }
  // If all values are valid, return true and no empty key
  return {isValid: true, emptyKey: null};
};

// TODO: To check whether the values are in correct format
export const validateFormatValues = args => {
  let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|co)$/;
  let phoneReg = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
  var panReg = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
  var pincodeReg = /^[1-9][0-9]{5}$/;

  let validationResult = {isValid: true, errorMsg: null};

  // Check if regex passes
  const checkRegex = (type, items, msg) => {
    console.log('REGEX TYPE------------>', type);

    for (const element of items) {
      if (!element) return;
      if (type.test(element) === false) {
        validationResult = {
          isValid: false,
          errorMsg: element + msg,
        };
        return; // Exiting the loop early if invalid
      }
    }
  };

  //   console.log(args);
  Object.entries(args).forEach(([key, value]) => {
    // Check if the value is empty, null, or undefined
    switch (key) {
      case 'email':
        checkRegex(emailReg, value, ' is not a valid email');
        break;
      case 'phone':
        checkRegex(phoneReg, value, ' is not a valid number');
        break;
      case 'pan':
        checkRegex(panReg, value, ' is not a valid pan');
        break;
      case 'pincode':
        checkRegex(pincodeReg, value, ' is not a valid pin');
        break;
      default:
        // Do nothing or handle other cases if needed
        break;
    }
  });

  return validationResult;
};
