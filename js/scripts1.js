function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;

  /*VALIDACIÓN*/
  if(name.length==0 || name.length < 3){
    text = "Por favor ingrese un nombre válido";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length==0 || subject.length < 3){
    text = "Ingrese un distrito válido";
    error_message.innerHTML = text;
    return false;
  }
  if(phone.length==0 ||isNaN(phone) || phone.length != 9){
    text = "Por favor ingrese un número de celular válido";
    error_message.innerHTML = text;
    return false;
  }
  if(email.length==0 || email.indexOf("@") == -1 || email.length < 6){
    text = "Por favor ingrese un Email válido";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length==0 || message.length <= 20){
    text = "Por favor ingrese más de 20 caracteres";
    error_message.innerHTML = text;
    return false;
  }
  alert("Formulario enviado satisfactoriamente!");
  return true;
}