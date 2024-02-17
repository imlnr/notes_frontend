const baseurl = "https://odd-jade-rhinoceros-sari.cyclic.app";

const handleLogin = () => {
  fetch(`${baseurl}/users/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: document.getElementById("email").value,
      pass: document.getElementById("pass").value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("token", data.token);
      location.href = "./index.html";
    })
    .catch((error) => console.log(error));
};
