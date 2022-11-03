const button = document.getElementById("submit");

function handleData() {
  let fullName = btoa(document.getElementById("name").value);
  let email = btoa(document.getElementById("email").value);
  let password = btoa(document.getElementById("password").value);
  const data = {
    name: fullName,
    email: email,
    password: password,
  };
  console.log(data);
}

button.addEventListener("click", handleData);
