function removeNonNumbers(phoneNumber) {
  var number = phoneNumber.replace(/[- )(]/g,'');
  return number;
}

// function that removes hyphens, spaces, and parantheses from telephone numbers
