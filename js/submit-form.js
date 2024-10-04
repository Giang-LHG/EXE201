document.querySelector("#contactForm").onsubmit = function (e) {
  e.preventDefault();

  // get html data
  let nameOj = document.querySelector('input[name="name"]');
  let addressOj = document.querySelector('input[name="msg_adress"]');
  let emailOj = document.querySelector('input[name="email"]');
  let budgetOj = document.querySelector('input[name="budget"]');
  let messageOj = document.querySelector("#message");

  // get user input value
  let name = nameOj.value;
  let adress = addressOj.value;
  let email = emailOj.value;
  let budget = budgetOj.value;
  let message = messageOj.value;
  console.log(name);
};
