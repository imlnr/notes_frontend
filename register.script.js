const baseurl = "https://odd-jade-rhinoceros-sari.cyclic.app";

const handleRegister = () => {
  fetch(`${baseurl}/users/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      pass: document.getElementById("pass").value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      location.href = "./login.html";
    })
    .catch((error) => console.log(error));
};
