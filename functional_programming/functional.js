const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';
function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim(length > 0);
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}
//reusable pure function
function getUserInputs(inputElementId) {
  return document.getElementById(inputElementId).value;
}

//this function will run the validataion
function createUser(userName, userPassowrd) {
  if (!validate(userName, REQUIRED) || !validate(userPassowrd, MIN_LENGTH, 5)) {
    throw new Error('Invalid Input - username or password is wrong');
  }
  return {
    userName: userName,
    password: userPassword,
  };
}

function greetUser(user) {
  console.log('Hi I am ' + user.userName);
}
function signupHandler(event) {
  event.preventDefault();
  const enteredUserName = getUserInputs('username');
  const enteredPassword = getUserInputs('password');
  try {
    const newUser = createUser(enteredUserName, enteredPassword);
    console.log(newUser);
    greetUser(newUser);
  } catch (err) {
    alert(err.message);
  }
}

//acces to the form - pure function
function connectForm(formId, formSubmitHandler) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', formSubmitHandler);
}

connectForm('user-input', signupHandler);
