function validateEmail(inputText) {
    var mailFormat =  /\S+@\S+\.\S+/;
    if (inputText.value.match(mailFormat)) {
      alert("Valid email!");
      return true;
    } else {
      alert("Invalid email!");
      return false;
    }
  }
  