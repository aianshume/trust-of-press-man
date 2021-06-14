(function(){
    emailjs.init("user_59kUxHgzPwSocHOXvI6Ei");
 })();
function sendEmail() {
    var contactName = document.getElementById('Name').value;
    var contactEmail = document.getElementById('Email').value;
    var contactNumber = document.getElementById('Number').value;
    var contactMessage = document.getElementById('Message').value;
  var templateParams = {
    name: contactName,
    message: contactMessage,
    email: contactEmail,
    number : contactNumber
  };
  alert("you name "+ templateParams.name + " and you mesaagae is " + templateParams.message)

  emailjs.send('service_db1hitu', 'template_9gciddp', templateParams)
    .then(function (response) {
      alert('SUCCESS!', response.status, response.text);
    }, function (error) {
      alert('FAILED...', error);
    });

}
